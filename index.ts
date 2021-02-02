import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/albums/1'

interface Albums {
 userId: number;
 id: number;
 title: string;
}

axios.get(url).then(response=> {
    const albums = response.data as Albums;

    const userId = albums.userId;
    const id = albums.id;
    const title = albums.title;

    console.log(`
        The userId: ${userId}
        id is: ${id}
        Has a title of: ${title}
    `);
});