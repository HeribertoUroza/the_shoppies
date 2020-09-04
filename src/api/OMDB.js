import Axios from 'axios';
//import apikey from './config';

const getAPIdata = async ( type, query ) => {
    const key = process.env.REACT_APP_OMDB
    const api = await Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${key}&${type}=${query}`
    })
    
    return api.data
}

export default getAPIdata;