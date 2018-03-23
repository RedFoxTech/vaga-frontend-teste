import {Injectable} from '@angular/core';
import {RESTService} from './rest.service';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  constructor(private rest: RESTService) {
  }

  pokeList(): Observable<any> {
    return this.rest.get<any[]>('/pokemon', new HttpParams());
  }

  search(filter: string): Observable<any> {
    return this.rest.get<any>(`/pokemon/${filter}`, new HttpParams());
  }
}
