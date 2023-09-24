const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData=(url:string):Promise<Response> => {
    return fetch(url)
}

getData(COMMENTS_URL)
    .then(respons => respons.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    
    

  
    

