import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import {AllSkillsComponent} from "./components/all-skills/all-skills.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-skills',
    pathMatch: 'full'
  },
  {
    path: 'all-skills',
    component: AllSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
