const URL = 'http://mysite.com';
const API_KEY = '273c#cb934849%n_9483498crfuje';

function connectToAPI(){
    console.log(`connected to server ${URL} with key ${API_KEY}`);
}

export {connectToAPI as credentials};