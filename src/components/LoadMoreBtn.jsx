export default function LoadMoreBtn({ onLoadMore, currentPage }) {
  console.log("current page: ", { currentPage });
  const handleClick = () => {
    onLoadMore();
  };
  return <button onClick={handleClick}>Load more...</button>;
}
