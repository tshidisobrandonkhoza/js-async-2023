
//remote json file
const url = `https://jsonplaceholder.typicode.com/todos`;
//local json file
// install npm install -g json-server
// terminal>>> json-server -p 4000 (port since 3000 used ) -w  ./data/usersdb.json (path to watch the file)
// json-server -p 4000  -w  ./data/usersdb.json
const localurl = `http://localhost:4000/users`;

const request = async (resources) => {
    let response = await fetch(resources);
    if (response.status !== 200) {
        throw new Error(`Could not resolve API Status Code: ${response.status}`);
    }
    let dataOb = await response.json();
    return dataOb;
};
const req = request(url)
    .then(requestData => { console.log('success', requestData) })
    .catch(err => { console.log('failed: ', err.message) });
console.log(req);

