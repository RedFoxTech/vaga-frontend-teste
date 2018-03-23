import {Component, OnInit} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {DataService} from '../services/data.service';
import {PokemonModel} from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})


export class PokemonComponent implements OnInit {

  public pokemon: PokemonModel

  constructor(private dataService: DataService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.dataService.listenNewPokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  closeResult: string;

  open(content) {
    this.modalService.open(content);
  }
  
}
