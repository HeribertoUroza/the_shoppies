import Axios from 'axios';
import apikey from './config';

const getAPIdata = ( query ) => {
    return Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${apikey.omdb_key}&t=${query}`
    })
}

export default getAPIdata;