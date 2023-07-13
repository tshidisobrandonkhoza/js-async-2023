
//remote json file
const url = `https://jsonplaceholder.typicode.com/todos`;
//local json file
// install npm install -g json-server
// terminal>>> json-server -p 4000 (port since 3000 used ) -w  ./data/usersdb.json (path to watch the file)
// json-server -p 4000  -w  ./data/usersdb.json
const localurl = `http://localhost:4000/users`;

//return a promise
const request = async (resources) => {

//default return a promise - fetch resources/url/api 
//use await instead of then/stall
let response = await fetch(resources);

//check for code status

if(response.status !== 200){
    //throw new error to break code
throw new Error(`Could not resolve API Status Code: ${response.status}`);
}

//chaining /instead of .then() to assign the resolve
//use await instead of then/stall
let dataOb = await response.json();


// for chaining
// let response = await fetch(resources); 
// let dataOb = await response.json();
// let response = await fetch(resources); 
// let dataOb = await response.json();

return dataOb;
};

//.then once 

const req = request(url)
.then(requestData =>{ console.log('success', requestData)})
.catch(err => { console.log('failed: ', err.message)});

console.log(req);



//step 1 fetch the data using the new method 'fetch' 
//step 2 pass in the resources/url/api as an argument to fetch
//step 3 retrieve the resolved - step 4(as a promise and chain the promise to receive data), 
//step 5 & rejected callback functions for any errors 


// fetch(url).then(response => {
//     //step 3 - resolved promise - pass json file
//     return response.json();

    
// }).then(data => {
//     //step 4 - chaining promise
    
//     console.log(data)
// }).catch(err => {
//     //step 5  

//     console.log(err)
// });
