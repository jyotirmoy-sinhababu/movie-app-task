import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import CardData from '../CardData';
import Pagination from '../Pagination/Pagination';

import usePagination from '../utils';

import './card.css';

const Card = ({ item }) => {
  const [data, setData] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const [searchList, setSearchList] = useState('');
  const [count, setCount] = useState(1);

  const [lastPage, setLastPage] = useState('');

  const pagination = usePagination(count, setCount, lastPage);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchInput(search);
    if (!search) setSearchList('');
  };

  const controlSearch = () => {
    if (searchInput) {
      axios
        .get(
          `https://movie-task.vercel.app/api/search?page=1&query=${searchInput}`
        )
        .then((res) => {
          setSearchList(res.data);
          // console.log(searchList);
          // searchResults = res.data;
        });
    }
  };
  useEffect(() => {
    if (count)
      axios
        .get(`https://movie-task.vercel.app/api/popular?page=${count}`)
        .then((res) => {
          setData(res.data);
          setLastPage(res.data.total_pages);
          console.log(res.data);
        });
  }, [count]);

  console.log(searchList);

  return (
    <div className='card-body'>
      <div className='search-container'>
        <input
          type='search'
          className='search-bar'
          placeholder='search'
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button className='search-btn' onClick={controlSearch}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi-search'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
      </div>
      <div className='card-cnt'>
        {searchList
          ? searchList &&
            searchList.data?.results.map((item) => {
              return <CardData item={item} />;
            })
          : data &&
            data?.data?.results.map((item) => {
              return <CardData item={item} />;
            })}
      </div>
      <div>
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
};

export default Card;
