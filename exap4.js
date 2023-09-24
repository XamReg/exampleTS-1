// import fetch from "node-fetch";
var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url);
};
getData(COMMENTS_URL)
    .then(function (respons) { return respons.json(); })
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error(error); });
