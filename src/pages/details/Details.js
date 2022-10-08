import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './details.css';

const Details = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('id');
    axios
      .get(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
      .then((res) => {
        console.log(res.data);

        setData(res.data.data);
      });
  }, []);

  return (
    <>
      <div className='details-body-cnt'>
        <div className='details-body'>
          <div className='detail-img-cnt'>
            <img
              className='banner'
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt='poster'
            />
          </div>
          <p className='detail-title'>
            <strong>{data.title}</strong>
          </p>
          <div className='detail-tagline-cnt'>
            <p className='detail-tagline'>
              <strong>{data.tagline}</strong>
            </p>
          </div>

          <p className='detail-runtime'>
            <strong>Runtime: </strong>
            {data.runtime} min
          </p>
          <p className='detail-rating'>
            <strong>Rating: </strong>
            {data.vote_average}
          </p>
          <div className='detail-summery-cnt'>
            {' '}
            <p className='detail-summery'>
              <strong>Summery: </strong>
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
