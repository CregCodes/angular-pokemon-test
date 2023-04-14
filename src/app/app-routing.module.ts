import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonDirectoryComponent } from './pokemon-directory/pokemon-directory.component';

const routes: Routes = [
  {
    path: 'pokemon-directory',
    component: PokemonDirectoryComponent,
  },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
