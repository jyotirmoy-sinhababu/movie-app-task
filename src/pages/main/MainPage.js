import './mainpage.css';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
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
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
