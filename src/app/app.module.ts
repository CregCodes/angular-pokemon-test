import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonDirectoryComponent } from './pokemon-directory/pokemon-directory.component';

@NgModule({
  declarations: [AppComponent, PokemonDirectoryComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'pokemon-directory',
        component: PokemonDirectoryComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
