import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PokemonService]
})

export class NavbarComponent implements OnInit {

  private searchStr: string

  constructor(private pokemonService: PokemonService,
    private dataService: DataService) {
  }

  ngOnInit() {
  }

  searchPokemon() {
    if (this.searchStr.length > 0) {
      this.pokemonService.search(this.searchStr)
        .subscribe(
          (response) => {
            console.log(response);
            this.dataService.notifyNewPokemon(response);
          });
    }
  }

}
