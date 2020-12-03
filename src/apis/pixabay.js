import axios from 'axios';

const KEY = '10173427-c9e35861b86fb027a6be6c077';

export default axios.create({
    baseURL:'https://pixabay.com/api/',
    params:{
        key:KEY
    }
})