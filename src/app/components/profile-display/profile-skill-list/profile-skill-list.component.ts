import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skill} from "../../../models/skill";

@Component({
  selector: 'app-profile-skill-list',
  templateUrl: './profile-skill-list.component.html',
  styleUrls: ['./profile-skill-list.component.css']
})
export class ProfileSkillListComponent implements OnInit {

  @Input()
  profileSkills: Skill[];

  @Output()
  deleteSkill: EventEmitter<Skill> = new EventEmitter();

  @Output()
  updateSkill: EventEmitter<Skill> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onUpdateSkill(skill){
    this.updateSkill.emit(skill);
  }

  onDeleteSkill(skill){
    console.log('deleting ' + skill.title);
    this.deleteSkill.emit(skill.title);
  }

  onSkillChange(){

  }

}
