const usePagination = (count, setCount, lastPage) => {
  const next = () => {
    setCount((prev) => prev + 1);
  };
  const prev = () => {
    if (count !== 1) setCount((prev) => prev - 1);
    setCount(1);
  };
  const first = () => {
    setCount(1);
  };
  const last = () => {
    setCount(lastPage);
  };
  return { next, prev, first, last, count };
};

export default usePagination;
