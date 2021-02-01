import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/albums/1'

axios.get(url).then(response=> {
    console.log(response.data);
});