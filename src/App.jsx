import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import PhotoModal from "./components/PhotoModal";
import PhotosGallery from "./components/PhotosGallery";
import SearchBar from "./components/SearchBar";
import { useGetPhotos } from "./hooks/useGetPhotos";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const { isLoading, error, photosList, getPhotos } = useGetPhotos();
  const [keyWord, setKeyWord] = useState("");
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (keyWord) {
      getPhotos(keyWord, page);
    } else {
      getPhotos("", page);
    }
  }, [keyWord, page]);

  const handleSearchSubmit = (query) => {
    setPage(1);
    console.log("Search query:", query);
    setKeyWord(query, 1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const scrollPosition = window.scrollY; // nie działa to scrollowanie, jest niestety rerender komponentu
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }, 0);
  };

  //---modal

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  function afterOpenModal() {
    // Działania po otwarciu modala
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedPhoto(null);
  }
  //---

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <PhotosGallery photos={photosList} openModal={openModal} />
      <LoadMoreBtn onLoadMore={handleLoadMore} currentPage={page} />
      <PhotoModal
        openModal={openModal}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        modalIsOpen={modalIsOpen}
        photos={photosList}
        getPhotos={getPhotos}
        selectedPhoto={selectedPhoto}
      />
    </>
  );
}

export default App;
