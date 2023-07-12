
//remote json file
const url = `https://jsonplaceholder.typicode.com/todos/`;
//local json file
// install npm install -g json-server
// terminal>>> json-server -p 4000 (port since 3000 used ) -w  ./data/usersdb.json (path to watch the file)
// json-server -p 4000  -w  ./data/usersdb.json
const localurl = `http://localhost:4000/users`;



//step 1 fetch the data using the new method 'fetch' 
//step 2 pass in the resources/url/api as an argument to fetch
//step 3 retrieve the resolved - step 4(as a promise and chain the promise to receive data), 
//step 5 & rejected callback functions for any errors 
fetch(url).then(response => {
    //step 4
    return response.json();
}).then(data => {
    //step 4  
    console.log(data)
}).catch(err => {
    //step 4  
    console.log(err)
});
