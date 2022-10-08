import './mainpage.css';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className='mainpage-body'>
        <div className='navbar'>
          <p className='nav-heading'>flickS</p>
        </div>
        <div className='data-container'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainPage;
