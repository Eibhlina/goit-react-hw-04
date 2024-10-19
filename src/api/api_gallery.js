import axios from "axios";

export const fetchRandomPhoto = async () =>{
    const respons = await axios.get("https://api.unsplash.com/photos/random?client_id=efmmn1C9szeF0zS2eGqmLdtxhr_yrc53Csu1e8B1R38")
    return respons.data
}
export const fetchSearchPhoto = async (searchPhase, currentPage) =>{
    const respons = await axios.get(`https://api.unsplash.com/search/photos?client_id=efmmn1C9szeF0zS2eGqmLdtxhr_yrc53Csu1e8B1R38&query=${searchPhase}&page=${currentPage}`)
    return respons.data.results
} 
