import { Pokemon } from './Pokemon';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {
    transform(pokemon: Pokemon, descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim().
            toLowerCase();

        if(descriptionQuery) {
            return pokemon.filter(pokemon => 
                pokemon.name.toLowerCase().includes(descriptionQuery)
            );
                
            } else {
            return pokemon;
        }
    }

}