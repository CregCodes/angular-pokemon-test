## Step 1

Background/ Considerations

- Create a new component for the Pokemon directory page (e.g. pokemon-directory.component).

- In the component's TypeScript file, define the necessary variables to store the Pokemon list data (pokemonList), current page (currentPage), items per page (itemsPerPage), total items (totalItems), total pages (totalPages), and array of pages (pagesArray). Initialize the current page to 1, the items per page to 50, and the other variables to 0 or empty.

- In the component's ngOnInit() method, subscribe to the ActivatedRoute query parameters and use the fetchPokemonList() method to fetch the Pokemon data for the current page. Also, update the component variables with the fetched data (e.g. pokemonList, totalItems, totalPages, pagesArray).

- Create a new method in the component to fetch the Pokemon data (fetchPokemonList()). In this method, use fetch() to call the PokeAPI with the current page and items per page. Once the data is fetched, update the component variables with the fetched data (e.g. pokemonList, totalItems, totalPages, pagesArray).

- In the component's HTML file, create a container for the Pokemon directory page with a title and subtitle.

- Create a navigation section with pagination links to navigate through the Pokemon list. Use \*ngFor to loop through the pagesArray and create links with the appropriate routerLink and query parameters. Use [ngClass] to add the active and disabled classes to the appropriate links based on the current page and total pages.

- Display the current page number above the pagination section using an interpolated string with the currentPage variable.

- Create a list section to display the Pokemon list data using \*ngFor. Display the Pokemon name and link to the Pokemon details page using routerLink and the Pokemon name.

- Add logic to update the Pokemon data and pagination links when the user clicks on a different page link. This can be done by subscribing to the ActivatedRoute query parameters and calling the fetchPokemonList() method with the new page parameter.

## Step 2

Background/ Considerations

- Create a new component for displaying Pokemon details, for example, PokemonDetailsComponent.

- Define a route for the PokemonDetailsComponent that includes a dynamic parameter for the Pokemon ID, for example, /pokemon/:id.

- In the PokemonDirectoryComponent, add a link to each Pokemon result that navigates to the PokemonDetailsComponent with the corresponding Pokemon ID as the dynamic parameter.
- In the PokemonDetailsComponent, extract the Pokemon ID from the route parameters using the ActivatedRoute service.

- Use the Pokemon ID to fetch the details of the Pokemon from the PokeAPI using a GET request to the endpoint https://pokeapi.co/api/v2/pokemon/{id or name}/.

- Display the Pokemon details on the PokemonDetailsComponent template.

- Make the PokemonDetailsComponent reloadable and shareable by including the Pokemon ID in the URL and using the ActivatedRoute service to extract it.
