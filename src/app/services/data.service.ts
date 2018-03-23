import {PokemonModel} from '../models/pokemon.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  private pokemonBehaviorSubject = new BehaviorSubject<PokemonModel>(null);

  public listenNewPokemon = this.pokemonBehaviorSubject.asObservable();

  constructor() {
  }

  notifyNewPokemon(pokemon: PokemonModel) {
    this.pokemonBehaviorSubject.next(pokemon);
  }

}
