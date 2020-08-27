import Axios from 'axios';
import apikey from './config';

const getAPIdata = ( query ) => {
    return Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${apikey.omdb_key}&t=${query}`
    }).then( res => {
        // console.log(`${res.data.Title} (${res.data.Year})`)

    }).catch( error => {
        console.log(error)
    })
}

export default getAPIdata;