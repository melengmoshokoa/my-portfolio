import axios from 'axios';

const apiUrl = 'https://api.pexels.com/v1/search?query=neon&per_page=18&page=1';

export const fetchJellyfishImages = async (apikey) => {
    try{
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: apikey,
            },
        });
        return response.data.photos;
    }catch (error){
        throw new Error('Failed to fetch images');
    }
};