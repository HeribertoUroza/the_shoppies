import Axios from 'axios';

const getAPIdata = ( query ) => {
    return Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=&t=${query}`
    }).then( res => {
        console.log(res.data)
    }).catch( error => {
        console.log(error)
    })
}

export default getAPIdata;