export const ImageCard =({imgURL, description, image, handleClickImage})=>{
    return      (<li>
                    <div>
                        <img 
                             className="gallery-image"
                             src={imgURL}
                             alt={description}
                             onClick={(event)=>{handleClickImage(image)}} 
                             />
                             
                    </div>
                </li>)
}