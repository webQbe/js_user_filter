// Define DOM Elements
const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [] 

async function getData(){/* 1. async Keyword
        The function is declared with the async keyword, making it an asynchronous function. This allows the use of the await keyword within the function, which pauses the function's execution until a Promise is resolved. */

    const res = await fetch('https://randomuser.me/api?results=50'); /* 2. Fetch Data
        The fetch() method sends an HTTP GET request to the https://randomuser.me/api endpoint.
        The query parameter ?results=50 instructs the API to return 50 random user results.
        await pauses the execution of the function until the fetch Promise is resolved. This ensures that 'res' contains the response from the server.
    */

    const data = await res.json(); /* 3. Convert Response to JSON
        res.json() is called on the Response object (res) returned by fetch. This method parses the JSON body of the response into a JavaScript object.
        await ensures that 'data' contains the parsed JSON once the Promise returned by res.json() is resolved.
    */

    console.log(data);

}

getData();