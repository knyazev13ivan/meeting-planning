import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UsersGuard } from './guards/users.guard';
import { AllMeetupsListComponent } from './pages/all-meetups/all-meetups-list/all-meetups-list.component';
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { AboutComponent } from './pages/home/about/about.component';
import { MyMeetupsListComponent } from './pages/my-meetups/my-meetups-list/my-meetups-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutComponent },
  { path: 'auth/login', component: AuthFormComponent },
  {
    path: 'all-meetups',
    component: AllMeetupsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-meetups',
    component: MyMeetupsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    canActivate: [UsersGuard],
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
