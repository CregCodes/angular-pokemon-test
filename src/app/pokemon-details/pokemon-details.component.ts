import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId: any;
  pokemon: any;

  constructor(route: ActivatedRoute) {
    console.log(route, 'this is the route');
    this.pokemonId = route.snapshot.params['id'];
  }

  ngOnInit() {
    console.log('POKEMNON ID!!!!!!', this.pokemonId);
    this.fetchPokemonDetails();
  }

  fetchPokemonDetails() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('this is the Pokemon DETAILS', data);
        console.log("You caught a Pokemon ('s details)?");
        this.pokemon = data;
      })
      .catch((error) => {
        console.log('Error fetching the details mate', error);
      });
  }
}
