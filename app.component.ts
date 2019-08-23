import { Component } from '@angular/core';
import { delay } from 'q';
import { createElement } from '@angular/core/src/view/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedexxx';  
  
  meubreakpoint = 1;

  searchdopokemon(){
    meubreakpoint = 2;
    var meuinput = ((<HTMLInputElement>document.getElementById("nomePokemon")).value); 
    meuinput = meuinput.toLowerCase();

      fetch("https://pokeapi.co/api/v2/pokemon/"+meuinput+"/")
      .then(function(response){
          response.json()
          .then(function(pokemon){
              nomedopoke = (pokemon.name);
              var casedospoke = document.getElementById('listagemPokemons').innerHTML = "<br>";

    
              console.log(nomedopoke);
    
              contador+=0;
    
              if(contador > 808){
                console.log('cabo os poke');
              }else{
                
                var listagempokemon = document.getElementById('listagemPokemons');
                var div = document.createElement("div");
                var divImg = document.createElement("div");
                var Img = document.createElement("img");
                var label = document.createElement("label");
                var p = document.createElement("p");
                var button = document.createElement("button");
                var br = document.createElement("br");
    
                
                div.setAttribute('class','ItemPokemon');
                div.setAttribute('id','id="pokemon'+contador+'"');
    
                // STYLEs
                div.style.cssFloat = "left";
                div.style.width = "100px";
    
                listagempokemon.appendChild(div).appendChild(divImg).setAttribute('class','imgListaPokemon');
                divImg.appendChild(Img).setAttribute('src',''+(pokemon.sprites.front_default)+'');
                listagempokemon.appendChild(label).innerText = "Nome do Pokémon : "+nomedopoke+"";
                listagempokemon.style.fontWeight = "bold";
                listagempokemon.appendChild(div).style.width = "100%";
                listagempokemon.appendChild(br);
                
                // var DivDoPoke = document.getElementById('pokemon'+contador+'');
                // DivDoPoke.appendChild(label);
    
                //  (pokemon.name)
                
                document.getElementById('imgDoPokemon').setAttribute('src',''+(pokemon.sprites.front_default)+'');
                document.getElementById('nomedoPokemon').innerHTML = "Nome do pokemon : "+(pokemon.name)+"";
                document.getElementById('descpokemon').innerHTML = "<b>Descrição Pokemon</b> : "+(pokemon.types[0].type.name)+"";

                contador+=1;
                console.log(contador);
              }
              
              
          })
      });
    }
}

var meubreakpoint;

var nomedopoke;
var imagemDoPoke;
var tipoDoPoke;
var contador = 1;

// Função para consultar o nome do pokemon

function consultarPokemon(){
  fetch("https://pokeapi.co/api/v2/pokemon/"+contador+"/")
  .then(function(response){
      response.json()
      .then(function(pokemon){
          nomedopoke = (pokemon.name);

          console.log(nomedopoke);

          if(contador > 808 || meubreakpoint == 2){
            console.log('cabo os poke');
          }else{
            
            var listagempokemon = document.getElementById('listagemPokemons');
            var div = document.createElement("div");
            var divImg = document.createElement("div");
            var Img = document.createElement("img");
            var label = document.createElement("label");
            var p = document.createElement("p");
            var button = document.createElement("button");
            var br = document.createElement("br");

            
            div.setAttribute('class','ItemPokemon');
            div.setAttribute('id','id="pokemon'+contador+'"');

            // STYLEs
            div.style.cssFloat = "left";
            div.style.width = "100px";

            listagempokemon.appendChild(div).appendChild(divImg).setAttribute('class','imgListaPokemon');
            divImg.appendChild(Img).setAttribute('src',''+(pokemon.sprites.front_default)+'');
            listagempokemon.appendChild(label).innerText = "Nome do Pokémon : "+nomedopoke+"";
            listagempokemon.style.fontWeight = "bold";
            listagempokemon.appendChild(div).style.width = "100%";
            listagempokemon.appendChild(br);
            
            // var DivDoPoke = document.getElementById('pokemon'+contador+'');
            // DivDoPoke.appendChild(label);

            //  (pokemon.name)

            contador+=1;
            console.log(contador);
            consultarPokemon();
            
          }

      })
  });
}


// procurarPokemon();
consultarPokemon();