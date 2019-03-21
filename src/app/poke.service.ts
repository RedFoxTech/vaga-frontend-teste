import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = 'https://pokeapi.co/api/v2/';
   }

   getPokemons(offset ?: number, limit ?: number): Promise<any> {
     return this.http.get(`${this.api}pokemon/?&offset=${offset}&limit=${limit}`).toPromise();
   }

   getPokemonInfo(num: number ): Promise<any> {
    return this.http.get(`${this.api}pokemon/${num}/`).toPromise();
  }

  getTypes(): Promise<any> {
    return this.http.get(`${this.api}type/`).toPromise();
  }

  getTypeId(type: string): Promise<any> {
    return this.http.get(`${this.api}type/${type}`).toPromise();
  }

}
