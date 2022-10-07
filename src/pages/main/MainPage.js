import { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import axios from 'axios';
import './mainpage.css';

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
      <div className='mainpage-body'>
        <div className='navbar'>
          <p className='nav-heading'>Movies App</p>
          <div>
            <input
              type='search'
              className='search-bar'
              placeholder='search'
              onChange={(e) => {}}
            />
          </div>
        </div>
        {data &&
          data?.data?.results.map((item) => {
            return (
              <div key={item.id} className='card-cnt'>
                <Card item={item} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainPage;
