import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'

  },
  {
    path: '**', component: NotfoundpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top', useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
