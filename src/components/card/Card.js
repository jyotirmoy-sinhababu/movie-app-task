import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

import './card.css';

const Card = ({ item }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://movie-task.vercel.app/api/popular?page=1')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className='card-body'>
      <div className='card-cnt'>
        {data &&
          data?.data?.results.map((item) => {
            return (
              <div key={item.id}>
                <div className='card-img-cnt'>
                  <img
                    className='image'
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt='movie poster'
                  />
                </div>
                <p className='card-title'>{item.title}</p>
                <p className='card-release'>
                  <strong>Release date:</strong>
                  {item.release_date}
                </p>

                <p className='card-vote-avg'>
                  <strong>Vote Average:</strong>
                  {item.vote_average}
                </p>
                <div>
                  <NavLink to='/details'>Details</NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
