import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Skill} from "../../../models/skill";

@Component({
  selector: 'app-add-new-skill',
  templateUrl: './add-new-skill.component.html',
  styleUrls: ['./add-new-skill.component.css']
})
export class AddNewSkillComponent implements OnInit {

  skillLevels: String[] = [
    "Familiar",
    "Proficient",
    "Excellent",
    "Expert"
  ];

  newSkill: String;
  newSkillLevel: String;

  @Output()
  addNewSkill: EventEmitter<Skill> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enterNewSkill(){
    let newSkill = new Skill({
      title: this.newSkill,
      level: this.newSkillLevel
    });
    this.addNewSkill.emit(newSkill);
  }

}
