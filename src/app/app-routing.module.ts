import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./instructions/instructions.module').then( m => m.InstructionsPageModule)
  },
  {
    path: 'luggage',
    loadChildren: () => import('./luggage/luggage.module').then( m => m.LuggagePageModule)
  },
  {
    path: 'lost',
    loadChildren: () => import('./lost/lost.module').then( m => m.LostPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
