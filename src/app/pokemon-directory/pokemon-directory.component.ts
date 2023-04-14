import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-directory',
  templateUrl: './pokemon-directory.component.html',
  styleUrls: ['./pokemon-directory.component.scss'],
})
export class PokemonDirectoryComponent implements OnInit {
  pages: any;
  pokemon: any;
  page: any;
  pagesArray: any;

  pokemonList: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 50;
  totalItems: number = 0;
  totalPages: number = 0;

  queryParamsSubject: Subject<any> = new Subject<any>();
  pokemonId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  fetchPokemonList() {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    const limit = this.itemsPerPage;

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("Do I know what I'm doing yet?");
        this.pokemonList = data.results;
        this.totalItems = data.count;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pagesArray = Array.from(
          { length: this.totalPages },
          (_, i) => i + 1
        );

        this.router.navigate(['/pokemon-directory'], {
          queryParams: { page: this.currentPage },
          replaceUrl: true,
        });
      });
  }

  ngOnInit(): void {
    this.fetchPokemonList();
    this.route.queryParams.subscribe((queryParams) => {
      this.currentPage = queryParams['page'] || 1;
      this.fetchPokemonList();
    });
  }

  getPokemonId(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }

  nextPage() {
    this.currentPage++;
    this.fetchPokemonList();
  }
}
