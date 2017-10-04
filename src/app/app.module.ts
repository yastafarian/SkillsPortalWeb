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

import { SkillSelectMenuComponent } from './components/main-display/skill-select-menu/skill-select-menu.component';
import { PeopleListComponent } from './components/main-display/people-list/people-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule,
  MdAutocompleteModule, MdInputModule,
  MdDialogModule, MdSnackBarModule, MdSelectModule, MdListModule, MdIconModule
} from '@angular/material';

import 'hammerjs';
import { PeopleListItemComponent } from './components/main-display/people-list-item/people-list-item.component';
import { PersonDetailsComponent } from './components/main-display/person-details/person-details.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile-display/profile/profile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllSkillsComponent } from './components/main-display/all-skills/all-skills.component';

import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileSkillListComponent } from './components/profile-display/profile-skill-list/profile-skill-list.component';
import { ProfileSkillListItemComponent } from './components/profile-display/profile-skill-list-item/profile-skill-list-item.component';
import { AddNewSkillComponent } from './components/profile-display/add-new-skill/add-new-skill.component';
import {ProfileApiService} from "./api-services/profile-api.service";
import {ProfileDataService} from "./data-services/profile-data.service";

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
    AllSkillsComponent,
    LogoutComponent,
    ProfileSkillListComponent,
    ProfileSkillListItemComponent,
    AddNewSkillComponent
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
    MdSelectModule,
    MdSnackBarModule,
    MdIconModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MdListModule
  ],
  providers: [SkillsDataService, SkillsApiService,
              PeopleApiService, PeopleDataService,
              AuthenticationService, AuthApiService,
              ProfileDataService, ProfileApiService],
  entryComponents: [PersonDetailsComponent,
                    ProfileComponent,
                    RegisterComponent,
                    LoginComponent], //for dialogs
  bootstrap: [AppComponent]
})
export class AppModule { }
