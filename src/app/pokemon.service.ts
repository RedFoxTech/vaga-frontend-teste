import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from "./Pokemon";
import { Observable } from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/');
    }
    get(url): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }
}