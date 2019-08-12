function buscarPoke(event, form){
    const inputPoke = form.poke;
    if (inputPoke){
        const poke = inputPoke.value;
        if (poke == true) {
            const URL = 'https://pokeapi.co/api/v2/pokemon/'+poke;
            fetch(URL).then(resposta => resposta.json())
                      .then(data => mostrarResposta(data))
                      .catch(erro => console.error(erro));
        }
    }
}

function mostrarPoke(poke) {
    const mensagem = 'Pokémon: ${poke.poke}';
    alert(mensagem);
}
