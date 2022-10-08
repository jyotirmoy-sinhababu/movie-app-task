import './App.css';
import MainPage from './pages/main/MainPage';
import Details from './pages/details/Details';
import Card from './components/card/Card';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {' '}
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Card />} />

          <Route path='/details' element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
