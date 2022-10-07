import React from 'react';
import './card.css';

const Card = ({ item }) => {
  return (
    <div className='card-body'>
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
    </div>
  );
};

export default Card;
