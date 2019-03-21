import { PokeService } from './../poke.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons = [];
  types = [];
  type = new FormControl();
  search = '';
  pokeTypes = [];
  offset = 0;
  limit = 60;
  spinner = true;

  constructor(private pokeService: PokeService,
              public dialog: MatDialog) {}

  ngOnInit() {
    this.getPokemons(this.offset, this.limit);
    this.getTypes();
  }

  getPokemons(offset, limit) {
    this.pokeService.getPokemons(offset, limit).then(res => {
      res.results.forEach(element => {
        const url = element.url;
        const urlSplit = url.split('/');
        const num = urlSplit[6];
        this.pokeService.getPokemonInfo(num).then(resp => {
          element.info = resp;
        });
      });
      const arr = this.pokemons.concat(res.results);
      this.pokemons = arr;
    });
  }

  getTypes() {
    this.pokeService.getTypes().then(res => {
      this.types = res.results;
    });
  }

  openDialog(pokemon) {
    const dialogRef = this.dialog.open(DialogDetailsComponent, {
      width: '450px',
      height: '500px'
    });
    dialogRef.componentInstance.pokemon = pokemon;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  searchPoke(name) {
    if (this.search === '') {
      this.pokemons = [];
      this.pokeTypes = [];
      this.offset = 0;
      this.getPokemons(this.offset, this.limit);
    }
    if (this.pokeTypes.length === 0) {
      const arr = this.pokemons.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
      this.pokemons = arr;
    } else {
      const arr = this.pokeTypes.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
      this.pokeTypes = arr;
    }
  }

  onScroll() {
    this.offset += 60;
    this.getPokemons(this.offset, this.limit);
  }

  getType(name) {
    if (name === 'all') {
      this.pokemons = [];
      this.pokeTypes = [];
      this.offset = 0;
      this.getPokemons(this.offset, this.limit);
    } else {
      this.pokemons = [];
      this.pokeTypes = [];
      this.pokeService.getTypeId(this.type.value).then(res => {
        res.pokemon.forEach(element => {
          const url = element.pokemon.url;
          const urlSplit = url.split('/');
          const num = urlSplit[6];
          this.pokeService.getPokemonInfo(num).then(resp => {
            element.info = resp;
          });
        });
        const arr = this.pokeTypes.concat(res.pokemon);
        this.pokeTypes = arr;
        console.log(this.pokeTypes);
      });
    }
  }
}
