import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';

import { AvailSkill } from '../../models/avail-skill';
import{ Person } from '../../models/person';

import { SkillsDataService } from '../../data-services/skills-data.service';
import { PeopleDataService } from '../../data-services/people-data.service';

import { PersonDetailsComponent } from '../person-details/person-details.component';

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
    public dialog: MdDialog
  ) {}

  public ngOnInit() {
    this.onGetAllSkills();
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
    for (const username of this.selectedSkill.people){
      console.log(this.selectedSkill.people.length);
      this.peopleDataService
        .getPersonByUsername(username)
        .subscribe((personArray) => {
          // TODO: handle empty array here.
          const person = personArray[0];
          this.people = this.people.concat(person);
        });
    }
  }

  onPersonClicked(person: Person) {
    // open dialog here.
    const dialogRef = this.dialog.open(PersonDetailsComponent);
    dialogRef.componentInstance.person = person;
    console.log(person.name);
  }

  onGetAllSkills() {
    this.skillsDataService
      .getAllSkills()
      .subscribe((skills) => this.skills = skills);
  }

}
