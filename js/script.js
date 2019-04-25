
    
    let pokemon = document.querySelector(".container");
    

    url = "https://pokeapi.co/api/v2/pokemon/"
    
    // let id = prompt("digite um id para achar um pokemon!");
     
    let id 

    function capturar(){
      id  = document.querySelector("#valor").value
         
    


    fetch(url + id).then((res)=>{
        if(res >= 400){

            throw new Error("Error server");

        }

        return res.json();

    }).then(res=>{

        console.log(res)

        let data = `
        
    <div class="caixa">
        
        <div class="detalhes">
            <h3>Pressione F5 para pesquisar mais algum</h3> 
    
            <img src="${res.sprites.front_default}" whidth="400">
            <img src="${res.sprites.back_default}">
            <p>ID:${res.id}</p>
            <h1>${res.forms[0].name}</h1>
            <h2>Tipo:${res.types[0].type.name}</h2>
            <h4>Altura:${res.height} m/c</h4>
            <h4>Peso:${res.weight}Kg/gr</h4>
            
        </div>
        <div class="pokemon">
            <img src="./img/evolucao1.gif" alt="">
            <h1>X</h1>
            <img src="./img/evolucao2.gif" alt="">
            
        </div>
    </div>

        `;
        if(id ==716){
            alert("Parabens Você encontrou Xerneias")
            pokemon.innerHTML = data;
        }
        else{

            pokemon.innerHTML = data
        }

        
    })

    }

 
 