export default function PhotoCard({ photo, openModal }) {
  const smallPhoto = photo.urls.small;
  const bigPhoto = photo.urls.regular;
  const { alt_description } = photo;
  const handleClick = () => {
    openModal(bigPhoto);
  };
  return (
    <div className="photoContainer" onClick={handleClick}>
      <img
        src={smallPhoto}
        alt={alt_description || "Photo without description"}
      />
    </div>
  );
}
