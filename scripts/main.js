function resetPokedex(){
    window.stop();
    document.querySelector(".poke-container").innerHTML = null;
}
function resetPager(){
    document.querySelector(".pager-list").innerHTML = null;
}

function renderPokemon(name, imgSrc){
    let pokemonsContainer =  document.querySelector(".poke-container");
    
    let pokemon = document.createElement("div");
    pokemon.setAttribute("class", "poke-info");

    let pokeImgContainer = document.createElement("img");
    pokeImgContainer.src = imgSrc;

    let pokeNameContainer = document.createElement("span");
    pokeNameContainer.innerHTML = name;
    
    pokemon.appendChild(pokeImgContainer);
    pokemon.appendChild(pokeNameContainer);
    pokemonsContainer.appendChild(pokemon);
}

function searchPokemon(url){
    let requestPokemon = new XMLHttpRequest();
    requestPokemon.open('GET', url);
    requestPokemon.onload = function(){
        let pokeData = JSON.parse(requestPokemon.responseText);
        let pokeName = pokeData.name;
        let pokeSprites =  pokeData.sprites;
        let pokeImage = pokeSprites.front_default;
        renderPokemon(pokeName, pokeImage);
        //console.log(pokeSprites);
    }
    requestPokemon.send();
}

function changeTitle(num){
    let listTitle = document.querySelector(".list-title");
    let queryTitle = document.querySelector(".query-title");
    if(num){
        listTitle.style.display = "none";
        queryTitle.style.display = "block";
    }
    else{
        listTitle.style.display = "block";
        queryTitle.style.display = "none";
    }
}

var btnSearch = document.getElementById("search-button");
btnSearch.onclick =  function(){
    let pokeName = document.getElementById("search-box").value;
    pokeName = pokeName.toLowerCase();
    resetPokedex();
    resetPager();
    changeTitle(1);
    searchPokemon('https://pokeapi.co/api/v2/pokemon/'+ pokeName +'.json');
    document.querySelector(".query").innerHTML = pokeName;
    console.log(pokeName);
}

function listPokemons(items, actualPage){
    let limit = 15;
    let totalOfPages = Math.ceil( items.length / limit);
    let count = (actualPage * limit) - limit;
    let delimiter = count + limit;

    if(actualPage <= totalOfPages){
        for(let i=count; i<delimiter; i++){
            console.log(items[i].name);
            searchPokemon(items[i].url); //REQUISITA POKEMON E RENDERIZA NA TELA
        }
    }

}

function buildPager(list, limit){
    let numOfPages = Math.ceil( list.length / limit); //Number of Pages
    let pagerContainer =  document.querySelector(".pager-list");
    for(let i=0; i<numOfPages; i++){
        let marker = document.createElement("li");
        marker.innerHTML = i;
        marker.addEventListener("click", function(){
            resetPokedex();
            listPokemons(list, i+1);
            document.querySelector(".page-num").innerHTML = i;
        });
        marker.setAttribute('class', 'page-item page-link');
        pagerContainer.appendChild(marker);
    }
}

function renderByType(type){
    let requestType = new XMLHttpRequest();
    requestType.open('GET', 'https://pokeapi.co/api/v2/type/'+ type +'.json');
    requestType.onload = function(){
        let data = JSON.parse(requestType.responseText).pokemon; //ARRAY DOS POKEMONS
        
        let pokeList = [];
        for(let i=0; i<data.length; i++) pokeList[i] = data[i].pokemon;
        
        listPokemons(pokeList, 1);
        buildPager(pokeList, 15);
    }
    requestType.send();
}

function renderAll(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon.json');
    request.onload = function(){
        let data = JSON.parse(request.responseText);
        let count = data.count;
        
        let otherRequest = new XMLHttpRequest();
        otherRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit='+count+'&offset=0');
        otherRequest.onload = function(){
            let pokeList = JSON.parse(otherRequest.responseText).results;
            listPokemons(pokeList, 1);
            buildPager(pokeList, 10);
        }
        otherRequest.send();
    }
    request.send();
}

function bootstrap(type){
    console.log(type);
    document.querySelector(".type-name").innerHTML = type.name;
    document.querySelector(".type-name").style.color = type.color;
    document.querySelector(".page-num").innerHTML = 0;
    if (type.id){  
        renderByType(type.id);
    } else{
        renderAll();
    }
}

var btnTypeArray =  document.querySelectorAll(".type-icon");
var types = [
    {id:0,name:"Todos",color:"black"},
    {id:1,name:"Normal",color:"#333"},
    {id:2,name:"Lutador",color:"orange"},
    {id:3,name:"Voador",color:"blue"},
    {id:4,name:"Venenoso",color:"purple"},
    {id:5,name:"Terra",color:"yellow"},
    {id:6,name:"Pedra",color:"brown"},
    {id:7,name:"Inseto",color:"green"},
    {id:8,name:"Fantasta",color:"purple"},
    {id:9,name:"Metálico",color:"gray"},
    {id:10,name:"Fogo",color:"red"},
    {id:11,name:"Água",color:"blue"},
    {id:12,name:"Planta",color:"green"},
    {id:13,name:"Elétrico",color:"yellow"},
    {id:14,name:"Psíquico",color:"pink"},
    {id:15,name:"Gelo",color:"blue"},
    {id:16,name:"Dragão",color:"purple"},
    {id:17,name:"Noturno",color:"brown"},
    {id:18,name:"Fada",color:"pink"}
];
for (let i = 0; i < btnTypeArray.length; i++) {
    btnTypeArray[i].addEventListener("click", function(){
        resetPokedex();
        resetPager();
        changeTitle(0);
        bootstrap(types[i]);
    }); 
}

bootstrap(types[0]);