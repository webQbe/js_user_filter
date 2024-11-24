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

    const { results } = await res.json(); /* 3. Convert Response to JSON
        res.json() is called on the Response object (res) returned by fetch. This method parses the JSON body of the response into a JavaScript object.
        await ensures that 'results' available in the parsed JSON once the Promise returned by res.json() is resolved.
    */

    
    // Clear existing results in UI
    result.innerHTML = '';

    // Loop Through Results Array
    results.forEach(user => {

        console.log(user);

        // Create list item for current user
        const li = document.createElement('li');

        // Add list item to listItems array
        listItems.push(li);  

        // Add data to list item
        li.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>`;

        // Append list item to result element
        result.appendChild(li);
      
    })

}

getData();

// Listen for input events in filter element &
// call filterData() with input value
filter.addEventListener('input', (e) => filterData(e.target.value));


function filterData(searchTerm){

    listItems.forEach(item => {
    
        // Covert all item text to lower case
        if(item.innerText.toLowerCase()
           // Check if item text includes search term
          .includes(searchTerm.toLowerCase())){ 
                
                // If searchTerm found in item text
                item.classList.remove('hide');
        
            } else {

                // If searchTerm not found
                item.classList.add('hide');

            }
    })

}