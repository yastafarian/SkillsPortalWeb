import { Component, OnInit, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Person } from '../../../models/person';
import { Skill } from '../../../models/skill';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  public person: Person;
  public skills: Skill[] = [];

  constructor(
    public dialogRef: MdDialogRef<PersonDetailsComponent>
  ) { }

  ngOnInit() {
    this.skills = this.person.skills;
  }

}
