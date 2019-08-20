const request = require('request');
const hostname="http://pokeapi.co/api/v2";
const path="/pokemon/1/";

request(`${hostname}${path}`, (err, res, body) => {
    console.log(body);
});
