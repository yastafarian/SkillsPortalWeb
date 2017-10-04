import { Component, EventEmitter, Output, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AvailSkill } from '../../../models/avail-skill';

@Component({
  selector: 'app-skill-select-menu',
  templateUrl: './skill-select-menu.component.html',
  styleUrls: ['./skill-select-menu.component.css']
})
export class SkillSelectMenuComponent {
  skillCtrl: FormControl;
  filteredSkills: any;

  @Input()
  skills: AvailSkill[];

  @Output()
  select: EventEmitter<AvailSkill> = new EventEmitter();



  selectedSkill: AvailSkill;

  constructor() {
  this.skillCtrl = new FormControl();
  this.filteredSkills = this.skillCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterskills(name));
}

filterskills(val: string) {
  if (val) {
   const filterValue = val.toLowerCase();
   return this.skills.filter(skill => skill.title.toLowerCase().startsWith(filterValue));
 }
 return this.skills;
}

onChangeSelection(skill: AvailSkill){
  if (skill) {
    this.selectedSkill = skill;
  }
  else {
      this.selectedSkill = null;
  }
}

  onSelect(){
    if (this.selectedSkill){
      this.select.emit(this.selectedSkill);
    }
    else console.log('fuck');
  }
}
