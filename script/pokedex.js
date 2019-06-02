const container = document.querySelector(".container");

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    
})
.catch((erro)=>{
    console.log("erro")
})