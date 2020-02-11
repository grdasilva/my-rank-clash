import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'userProfile',
    loadChildren: () => import('./components/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'clanProfile',
    loadChildren: () => import('./components/clan-profile/clan-profile.module').then(m => m.ClanProfileModule)
  },
  {
    path: 'bestPlayersDecks',
    loadChildren: () => import('./components/best-players-decks/best-players-decks.module').then(m => m.BestPlayersDecksModule)
  },
  // {
  //   path: 'details/:id',
  //   loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
