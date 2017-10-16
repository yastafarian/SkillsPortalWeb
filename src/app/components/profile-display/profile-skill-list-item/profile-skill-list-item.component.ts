import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skill} from "../../../models/skill";

@Component({
  selector: 'app-profile-skill-list-item',
  templateUrl: './profile-skill-list-item.component.html',
  styleUrls: ['./profile-skill-list-item.component.css']
})
export class ProfileSkillListItemComponent implements OnInit {

  @Input()
  skill: Skill;

  @Output()
  deleteSkill: EventEmitter<Skill> = new EventEmitter();

  @Output()
  updateSkill: EventEmitter<Skill> = new EventEmitter();

  skillLevels: String[] = [
    "familiar",
    "proficient",
    "excellent",
    "expert"
  ];

  constructor() { }

  ngOnInit() {
  }

  onChangeLevel(){
    console.log('changing level');
    this.updateSkill.emit(this.skill);
  }

  onClickDelete(){
    this.deleteSkill.emit(this.skill);
  }

}
