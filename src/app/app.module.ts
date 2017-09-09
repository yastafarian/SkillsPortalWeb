import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';

import { SkillsDataService } from './data-services/skills-data.service';
import { SkillsApiService } from './api-services/skills-api.service';

import { PeopleApiService } from './api-services/people-api.service';
import { PeopleDataService } from './data-services/people-data.service';

import { AuthApiService } from './api-services/auth-api.service';
import { AuthenticationService } from './auth-services/authentication.service';

import { SkillSelectMenuComponent } from './components/skill-select-menu/skill-select-menu.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,
        MdAutocompleteModule, MdInputModule,
        MdDialogModule} from '@angular/material';

import 'hammerjs';
import { PeopleListItemComponent } from './components/people-list-item/people-list-item.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllSkillsComponent } from './components/all-skills/all-skills.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SkillSelectMenuComponent,
    PeopleListComponent,
    PeopleListItemComponent,
    PersonDetailsComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AllSkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [SkillsDataService, SkillsApiService,
              PeopleApiService, PeopleDataService,
              AuthenticationService, AuthApiService],
  entryComponents: [PersonDetailsComponent,
                    ProfileComponent,
                    RegisterComponent,
                    LoginComponent], //for dialogs
  bootstrap: [AppComponent]
})
export class AppModule { }
