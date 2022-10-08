import { NavLink, useNavigate } from 'react-router-dom';

const CardData = ({ item }) => {
  const handleClick = () => {
    localStorage.setItem('id', `${item.id}`);
    navigate('/details');
  };
  const navigate = useNavigate();
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
        <strong>Rating: </strong>
        {item.vote_average}
      </p>
      <div>
        <button
          onClick={handleClick}
          style={{
            background: 'transparent',
            color: 'rgb(222, 143, 24)',
            textDecoration: 'none',
            border: 'none',
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CardData;
