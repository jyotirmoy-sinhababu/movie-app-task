import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://movie-task.vercel.app/api/popular?page=1')
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
            return <div key={item.results.id}></div>;
          })}
      </div>
    </>
  );
};

export default MainPage;
