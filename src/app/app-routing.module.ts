import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import {AllSkillsComponent} from './components/all-skills/all-skills.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-skills',
    pathMatch: 'full'
  },
  {
    path: 'all-skills',
    component: AllSkillsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
