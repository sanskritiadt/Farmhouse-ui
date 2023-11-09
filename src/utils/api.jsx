import axios from "axios";


export const fetchPropertyDetails = async () => {
    try {
        const response = await axios.get(`/alpha-homes/property/allPropertyDetails`)
        return response.data;
    } catch (error) {
        throw error; 
    }
};

export const fetchSingleProperty = async (id)=>{
    try{
        const response  = await axios.get(`/alpha-homes/property/getPropertyDetailsById/${id}`)
        return response.data;
    }catch(error){
        throw error;
    }
}

export const fetchAmenitiesData = async(id)=>{
    try{
        const response = await axios.get(`/alpha-homes/property/getAmenitiesDetails/${id}`)
        return response.data;
    }catch(error){
        throw error;
    }
}