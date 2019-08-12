const container = document.querySelector(".container");
 
fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.results.forEach(pokemon => {  
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        container.appendChild(card);
        
        let nomePokemon = document.createElement("h1");
        nomePokemon.innerHTML = pokemon.name.toUpperCase();
        card.appendChild(nomePokemon)
        
        let url = pokemon.url;
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            let informacao = [data]
            informacao.forEach(cada => {
                let imagem = document.createElement("img");
                imagem.setAttribute("src", cada.sprites.front_default)
                card.appendChild(imagem);

                card.addEventListener("click", ()=>{
                    let modal = document.querySelector(".modal");
                    let modalImagem = document.querySelector(".modal-imagem")
                    let modalInformacoes = document.querySelector(".modal-informacoes")
            
                    if(modal.classList.contains('ativo')) {
                        modal.classList.remove('ativo');
                    } else {
                        modal.classList.add('ativo');
                    }
                    let nomeModal = document.createElement("span")
                    nomeModal.innerHTML = pokemon.name.toUpperCase();

                    let imagemModal = document.createElement("img");
                    imagemModal.setAttribute("src", cada.sprites.front_shiny)

                    let habilidade = document.createElement("h3");
                    habilidade.innerHTML = "Ability:"
                    
                    modalImagem.appendChild(imagemModal)
                    modalImagem.appendChild(nomeModal)
                    modalInformacoes.appendChild(habilidade);

                    cada.abilities.forEach(habilid => {
                        
                        let descricao = habilid.ability.url;
                        fetch(descricao)
                        .then((response)=>{
                            return response.json()
                        })
                        .then((data)=>{
                            let descricaoUrl = [data]

                            descricaoUrl.forEach(habilidadePokemon => {
                                
                                habilidadePokemon.effect_entries.forEach(textoHablidade => {
                                    
                                    let habilidades = document.createElement("p");
                                    habilidades.innerHTML = habilid.ability.name.toUpperCase() +"-"+ textoHablidade.effect;
            
                                    modalInformacoes.appendChild(habilidades);
                                    const fechar = document.querySelectorAll(".close")
                                    for(let close of fechar){
                                        
                                        close.addEventListener('click', ()=>{
                                            let modal = document.querySelector(".modal")
                                            let modalPokemon = document.querySelector(".modalPokemon")
                                            modal.classList.remove('ativo');
                                            modalPokemon.classList.remove('ativo');
                                            modalImagem.appendChild(imagemModal).remove()
                                            modalImagem.appendChild(nomeModal).remove()
                                            modalInformacoes.appendChild(habilidade).remove()
                                            modalInformacoes.appendChild(habilidades).remove()
                                        })
                                    }
                                });
                            });
                        })
                        .catch((erro)=>{
                        })
                    });
                })
            });
        })
        .catch((erro=>{
        }))
    });
})
.catch((erro)=>{
})
