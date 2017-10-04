import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import {AllSkillsComponent} from './components/main-display/all-skills/all-skills.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile-display/profile/profile.component";
import {SkillResolver} from "./resolvers/skill.resolver";
import {ProfileResolver} from "./resolvers/profile.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-skills',
    pathMatch: 'full'
  },
  {
    path: 'all-skills',
    component: AllSkillsComponent,
    resolve: {
      skills: SkillResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    SkillResolver,
    ProfileResolver
  ]
})
export class AppRoutingModule {
}
