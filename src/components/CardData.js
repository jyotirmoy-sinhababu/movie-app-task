import { NavLink } from 'react-router-dom';

const CardData = ({ item }) => {
  return (
    <div className='card-data-cnt' key={item.id}>
      <div className='card-img-cnt'>
        <img
          className='image'
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt='movie poster'
        />
      </div>
      <p className='card-title'>{item.title}</p>
      <p className='card-txt'>
        <strong>Release date: </strong>
        {item.release_date}
      </p>

      <p className='card-txt'>
        <strong>Vote Average: </strong>
        {item.vote_average}
      </p>
      <div>
        <NavLink
          style={{ color: 'rgb(222, 143, 24)', textDecoration: 'none' }}
          to='/details'
        >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default CardData;
