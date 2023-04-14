import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component:AuthComponent
  },
  {
    path: 'home',

    loadChildren: () =>
      import('./home-page/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./user-info/user-info.module').then((m) => m.UserInfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
