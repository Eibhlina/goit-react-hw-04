import PhotoCard from "./PhotoCard";

export default function ImageGallery({ photos, openModal }) {
  return (
    <ul className="photoGallery">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard
            photo={photo}
            src={photo.links}
            alt={photo.first_name}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}
