import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';

import { AvailSkill } from '../../../models/avail-skill';
import{ Person } from '../../../models/person';

import { SkillsDataService } from '../../../data-services/skills-data.service';
import { PeopleDataService } from '../../../data-services/people-data.service';

import { PersonDetailsComponent } from '../person-details/person-details.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-skills',
  templateUrl: './all-skills.component.html',
  styleUrls: ['./all-skills.component.css']
})
export class AllSkillsComponent implements OnInit {

  skills: AvailSkill[] = [];

  people: Person[] = [];

  selectedSkill: AvailSkill;

  constructor(
    private skillsDataService: SkillsDataService,
    private peopleDataService: PeopleDataService,
    public dialog: MdDialog,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.data.map((data) => data['skills']).subscribe(
      (skills) => {
        this.skills = skills;
      }
    );
  }

  onSkillSelected(selectedSkill) {
    this.selectedSkill = selectedSkill;
    // Now we have the user names
    this.getPeopleWithSelectedSkill();
  }

  getPeopleWithSelectedSkill() {
    console.log('getting people with skill: ' + this.selectedSkill.title);
    this.people = [];
    // it returns an array, but a username is unique; therefore, we get a single
    // element array.
    for (const person of this.selectedSkill.people){
      this.peopleDataService
        .getPersonByUsername(person.username)
        .subscribe((personArray) => {
          // TODO: handle empty array here.
          const person = personArray;
          console.log(person[0].username);
          this.people = this.people.concat(person[0]);
        });
    }
  }

  onPersonClicked(person: Person) {
    // open dialog here.
    const dialogRef = this.dialog.open(PersonDetailsComponent);
    dialogRef.componentInstance.person = person;
    console.log(person.name);
  }

}
