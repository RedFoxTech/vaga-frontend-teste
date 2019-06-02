const container = document.querySelector(".container");

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    data.results.forEach(pokemon => {  
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        container.appendChild(card);
        
        const nomePokemon = document.createElement("h1");
        nomePokemon.innerHTML = pokemon.name.toUpperCase();
        card.appendChild(nomePokemon)
        
        const url = pokemon.url;
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            const informacao = [data]
            informacao.forEach(cada => {
                const imagem = document.createElement("img");
                imagem.setAttribute("src", cada.sprites.front_default)
                card.appendChild(imagem);

                card.addEventListener("click", ()=>{
                    const modal = document.querySelector(".modal");
        
                    if(modal.classList.contains('ativo')) {
                        modal.classList.remove('ativo');
                    } else {
                        modal.classList.add('ativo');
                    }

                })
                
            });

        })
        .catch((erro=>{
            console.log("erro da url")
        }))
    });
})
.catch((erro)=>{
    console.log("erro")
})


