import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import { AvailSkill } from '../../models/avail-skill';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.css']
})
export class PeopleListItemComponent implements OnInit {

  @Input()
  person: Person;

  @Input()
  skill: AvailSkill;

  @Output()
  clicked: EventEmitter<Person> = new EventEmitter();

  level: string = '';

  constructor() { }

  ngOnInit() {
    const skill = this.person.skills.filter((s) => s.title == this.skill.title);
    this.level = skill[0].level;
  }

  onClick(person: Person){
    this.clicked.emit(person);
  }
}
