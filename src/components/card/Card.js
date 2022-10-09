import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import CardData from '../CardData';
import Pagination from '../Pagination/Pagination';

import usePagination from '../utils';

import './card.css';

const Card = ({ item }) => {
  const [id, setId] = useState('');
  const [data, setData] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const [searchList, setSearchList] = useState('');
  const [count, setCount] = useState(1);

  const [lastPage, setLastPage] = useState(99);

  const [yearList, setYearList] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredList, setFilteredList] = useState('');

  const pagination = usePagination(count, setCount, lastPage);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchInput(search);
    if (!search) setSearchList('');
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedYear(value);
  };

  const looper = () => {
    const years = [];
    for (let i = 2022; i > 1960; i--) {
      years.push(i);
    }
    setYearList(years);
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
    } else {
      setSearchList('');
    }
  };
  useEffect(() => {
    if (count)
      axios
        .get(`https://movie-task.vercel.app/api/popular?page=${count}`)
        .then((res) => {
          setData(res.data);
        });
  }, [count]);

  useEffect(() => {
    if (data) {
      const sorted = [...data?.data?.results].sort((a, b) => {
        const data1 = a.release_date.replaceAll('-', '');
        const data2 = b.release_date.replaceAll('-', '');
        return +data2 - +data1;
      });
    }
  }, [data]);

  useEffect(() => {
    if (!searchList) {
      if (selectedYear) {
        if (selectedYear !== 'all') {
          const filtered = data?.data?.results.filter((item) => {
            if (item.release_date.startsWith(selectedYear)) {
              return item.release_date.startsWith(selectedYear);
            } else {
              setFilteredList(['No data found']);
              return;
            }
          });
          console.log(filtered);

          setFilteredList(filtered);
        } else {
          setFilteredList('');
        }
      }
    }
  }, [selectedYear]);

  useEffect(() => {
    if (searchList) {
      if (selectedYear) {
        if (selectedYear !== 'all') {
          const filtered = searchList.data?.results.filter((item) => {
            if (item.release_date.startsWith(selectedYear)) {
              return item.release_date.startsWith(selectedYear);
            } else {
              setFilteredList(['No data found']);
              return;
            }
          });
          console.log(filtered);

          setFilteredList(filtered);
        } else {
          setFilteredList('');
        }
      }
    }

    if (!searchList) {
      if (selectedYear) {
        if (selectedYear !== 'all') {
          const filtered = data?.data?.results.filter((item) => {
            if (item.release_date.startsWith(selectedYear)) {
              return item.release_date.startsWith(selectedYear);
            } else {
              setFilteredList(['No data found']);
              return;
            }
          });
          console.log(filtered);

          setFilteredList(filtered);
        } else {
          setFilteredList('');
        }
      }
    }
  }, [searchList, selectedYear]);

  useEffect(() => looper(), []);

  return (
    <>
      (
      <div className='card-body'>
        <div className='search-container'>
          <select onChange={handleSelect} name='' id=''>
            <option value='all'>All</option>
            {yearList.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
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
        <div>
          {filteredList && !filteredList.length && (
            <h2 style={{ color: 'white' }}>No data found</h2>
          )}
        </div>
        <div className='card-cnt'>
          {filteredList
            ? filteredList.map((item) => {
                return <CardData item={item} />;
              })
            : searchList
            ? searchList &&
              searchList.data?.results.map((item) => {
                return <CardData item={item} />;
              })
            : data &&
              data?.data?.results.map((item) => {
                return <CardData item={item} />;
              })}
        </div>
        <div className='card-pagination'>
          <Pagination pagination={pagination} lastPage={lastPage} />
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
      )
    </>
  );
};

export default Card;
