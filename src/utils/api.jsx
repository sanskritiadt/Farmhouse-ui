import axios from "axios";


export const fetchPropertyDetails = async () => {
    try { 
        const response = await axios.get(`https://650acccadfd73d1fab08eb24.mockapi.io/villalist`)
        return response.data;
    } catch (error) {
        throw error; 
    }
};
//alpha-homes/property/allPropertyDetails
export const fetchSingleProperty = async (id)=>{
    try{
        const response  = await axios.get(`https://650acccadfd73d1fab08eb24.mockapi.io/villalist/${id}`)
        return response.data;
    }catch(error){
        throw error;
    }
}
//alpha-homes/property/getPropertyDetailsById/${id}

export const fetchAmenitiesData = async(id)=>{
    try{
        const response = await axios.get(`/alpha-homes/property/getAmenitiesDetails/${id}`)
        return response.data;
    }catch(error){
        throw error;
    }
}