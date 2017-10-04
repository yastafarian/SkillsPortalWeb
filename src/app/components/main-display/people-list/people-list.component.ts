import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../models/person';
import { AvailSkill } from '../../../models/avail-skill';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  @Input()
  people: Person[];

  @Input()
  selectedSkill: AvailSkill;

  @Output()
  personClicked: EventEmitter<Person> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onClick(person: Person){
    this.personClicked.emit(person);
  }

}
