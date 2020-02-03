import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/body/body.module').then(m => m.BodyModule)
  },
  {
    path: 'userProfile',
    loadChildren: () => import('./components/user-profile/user-profile.module').then(m => m.UserProfileModule)
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
