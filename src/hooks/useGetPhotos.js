import { useState } from "react";
import fetchPhotos from "../api/fetchPhotos";

export const useGetPhotos = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPhotos = async (query = "", page = 1) => {
    setIsLoading(true);
    try {
      const newPhotos = await fetchPhotos(query, page);
      if (page === 1) {
        setPhotosList(newPhotos);
      } else {
        setPhotosList((prevPhotos) => [...prevPhotos, ...newPhotos]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    photosList,
    getPhotos,
  };
};
