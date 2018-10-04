function requestPoke (){
    var inputPoke = document.querySelector('input[name=pokemon]');
    var poke = inputPoke.value;
    var url = 'https://pokeapi.co/api/v2/pokemon/' + poke + '/json';
    var xhr = new XMLHttpRequest();
    xhr.open ('GET', url, true);
    xhr.onreadystatechange = function() {
            if (xhr.readyState = 4 && xhr.status == 200) {
                preencheModal(JSON.parse(xhr.responseText));
            }
        };
    
}
