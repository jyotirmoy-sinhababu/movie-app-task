import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './details.css';

const Details = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://movie-task.vercel.app/api/movie?movieId=634649')
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className='home-body'>
        {data &&
          data?.map((item) => {
            return <div key={item.show.id}></div>;
          })}
      </div>
    </>
  );
};

export default Details;
