import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from './Pokemon';
import { PokemonService } from './pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PokemonWiki';
  list: Pokemon[] = [];
  selectedPokemon: Pokemon;
  filter: string = '';

  constructor(private pokemonService: PokemonService){}
  ngOnInit(): void {
    this.pokemonService.list().subscribe(resposta => {
      this.list = resposta.results;
    });
  }
  
  getDetails(url) {
    this.pokemonService.get(url).subscribe(resposta => {
      this.selectedPokemon = resposta;
      
    });
  }

}