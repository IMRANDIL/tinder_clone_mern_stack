import axios from 'axios';


const instance = axios.create({
    baseURL: `https://tinderbackend0016.herokuapp.com`
});


export default instance;