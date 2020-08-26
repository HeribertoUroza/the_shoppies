import Axios from 'axios';

const getAPIdata = ( query ) => {
    return Axios({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=e33ebc2e&t=${query}`
    }).then( res => {
        console.log(res.data)
    }).catch( error => {
        console.log(error)
    })
}

export default getAPIdata;