import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UsersGuard } from './guards/users.guard';
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { AboutComponent } from './pages/home/about/about.component';
import { MyMeetupsListComponent } from './pages/my-meetups/my-meetups-list/my-meetups-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AboutComponent },
  { path: 'auth/login', component: AuthFormComponent },
  {
    path: 'my-meetups',
    component: MyMeetupsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: MyMeetupsListComponent,
    canActivate: [UsersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
