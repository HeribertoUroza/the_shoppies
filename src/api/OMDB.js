import Axios from 'axios';
import apikey from './config';

const getAPIdata = async ( type, query ) => {
    const api = await Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&${type}=${query}`
    })
    
    return api.data
}

export default getAPIdata;