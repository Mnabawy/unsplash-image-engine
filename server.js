import http from 'http';
import fetch from 'node-fetch';
import { createApi } from 'unsplash-js';



const unsplash = createApi({
    accessKey: "mhNOr0XF3m_ENQqhexIgki0Y--Kw05Zd0BJ5PNF5LqA",
    fetch,
})


// feed example
unsplash.users.getPhotos({ username: 'natural' }).then(result => {
    if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
    } else {
        const feed = result.response;

        // extract total and results array from response
        const { total, results } = feed;

        // handle success here
        console.log(`received ${results.length} photos out of ${total}`);
        console.log('first photo: ', results[0]);
    }
});

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send back a response and end the connection
    res.end('Hello World!\n');
});


app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');