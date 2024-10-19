import { ImageCard } from "./ImageCard"

export const ImageGalery =({gallery, handleClickImage})=>{
    return      (<ul className="gallery"
                     >
                        {gallery.map((image)=>{
                            return(<ImageCard
                                key={image.id}
                                imgURL={image.urls.small}
                                description={image.alt_description}
                                image={image}
                                handleClickImage={handleClickImage}
                                />)
                        })}

                 </ul>)
}

