import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './characters/details/details.component';

const routes: Routes = [
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'characters/details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
