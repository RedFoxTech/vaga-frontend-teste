
    
    let pok = document.querySelector(".container");
    

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
    
    <h1>Esse é o Pokemon ideal para você!!</h1>
    <div class="caixa-pokemon">
        
        <div class="pokemon">
        <h1>${res.forms[0].name}</h1>
            <div class="separa">
            <img src="${res.sprites.front_default}" whidth="400">
            <img src="${res.sprites.back_default}">
            </div>
        </div>
        
        <div class="detalhes">
              
            <p>ID:${res.id}</p>
            <h2>Tipo:${res.types[0].type.name}</h2>
            <h4>Altura:${res.height} m/c</h4>
            <h4>Peso:${res.weight}Kg/gr</h4>
        </div>
        
    </div>

        `;
         
        pok.innerHTML = data;

    });

}



 

 

 