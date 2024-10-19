import { useState, useEffect } from 'react'
import { ImageGalery } from './Components/ImageGalery.jsx'
import { ImageModal } from './Components/ImageModal.jsx'
import { Loader } from './Components/Loader.jsx'
import { LoadModeBtn } from './Components/LoadModeBtn.jsx'
import { SearchBar } from './Components/SearchBar.jsx'
import { fetchSearchPhoto } from './api/api_gallery.js'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

const ErrorMessage =(error)=>{
  return      (<div>
                      <h1>{error.error.message}</h1>
               </div>)
}

const notify = () => toast.error("Phrase is too short!");

function App() {
  const [searchPhase, setSearchPhase]=useState("")
  const [isLoading, setIsLoading]=useState(false)
  const [error, setError]=useState(false)
  const [gallery, setgallery]=useState([])
  const [curentPage, setCurentPage]=useState(1)
  const [selectedImage, setSelectedImage]=useState()
  const [modalIsOpen, setModalIsOpene]=useState(false)

  const handleSearch = (phase)=>{
    if(phase.trim()=="") {
       return notify()
    }
    setgallery([])
    setSearchPhase(phase)
    setCurentPage(1)
  }
  const handleLoadMore = ()=>{
    setCurentPage( 1 + curentPage )
  }
  const handleClickImage = (clicedImage)=>{
    setSelectedImage(clicedImage)
    setModalIsOpene(true)
  }
  const handleColoseModal = ()=>{
    setModalIsOpene(false)
  }

  useEffect(()=>{
  },[selectedImage])

  useEffect(()=>{
    const getPhoto = async () => {
      try{
        setError(false)
        setIsLoading(true);
        const galleryItems = await fetchSearchPhoto(searchPhase, curentPage)
        setgallery([...gallery,...galleryItems])
        setError(false)
      }catch(error){
        setgallery({})
        setError(error)
      }finally{
        setIsLoading(false);
      }
    };
    if(searchPhase.trim()!="") getPhoto()
  },[searchPhase,curentPage])

  return (
    <>
      <Toaster />
      <SearchBar
      handleSearch={handleSearch}/>
      {searchPhase.trim()!="" ? gallery.length == 0 && <h2>Result not found! </h2> : false}
      {gallery.length > 0 && <ImageGalery
                              gallery={gallery}
                              handleClickImage={handleClickImage}/>}
      {isLoading && <Loader/>}
      {error && <ErrorMessage
                 error={error}
                />}
      {gallery.length > 0 && <LoadModeBtn
                              handleLoadMore={handleLoadMore}
                            />}
      <ImageModal
       modalIsOpen={modalIsOpen}
       selectedImage={selectedImage}
       handleColoseModal={handleColoseModal}

      />
    </>
  )
}

export default App
