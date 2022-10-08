const Pagination = ({ pagination }) => {
  const btnStyle = {
    width: 'fit-content',
    height: '40px',
    border: 'none',
    background: 'white',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '40px',
    aspectRatio: '1 / 1',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '1200px',
        padding: '50px 0',
      }}
    >
      <button style={btnStyle} onClick={pagination.first}>
        <svg
          style={imgStyle}
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-chevron-bar-left'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z'
          />
        </svg>
      </button>
      <button
        onClick={pagination.prev}
        style={{ ...btnStyle, opacity: pagination.count > 1 ? '1' : '0.5' }}
      >
        <svg
          style={imgStyle}
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-chevron-compact-left'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z'
          />
        </svg>
      </button>
      <button style={btnStyle} onClick={pagination.next}>
        <svg
          style={imgStyle}
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-chevron-compact-right'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z'
          />
        </svg>
      </button>
      <button style={btnStyle} onClick={() => pagination.last()}>
        <svg
          style={imgStyle}
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-chevron-bar-right'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
