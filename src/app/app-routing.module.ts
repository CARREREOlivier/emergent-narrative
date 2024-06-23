import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FanfictionsComponent } from './fanfictions/fanfictions.component';
import { AboutComponent } from './about/about.component';
import { FanfictionDetailComponent } from './fanfiction-detail/fanfiction-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fanfictions', component: FanfictionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fanfiction/:id', component: FanfictionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
