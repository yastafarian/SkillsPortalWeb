import {Component, OnInit} from '@angular/core';
import { Person} from "../../../models/person";
import {ActivatedRoute} from "@angular/router";
import {ProfileDataService} from "../../../data-services/profile-data.service";
import {Skill} from "../../../models/skill";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Person;
  loaded: Boolean = false;


  constructor(
    private profileService: ProfileDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.map((data) => data['profile']).subscribe(
      (profile) => {
        this.profile = profile;
        this.loaded = true;
      }
    );
  }

  onDelete(skill: string){
    this.profileService.deleteSkill(skill).subscribe(res =>{
      this.profile = res;
    });
  }


  onAddSkill(skill: Skill){
    let personSkills = this.profile.skills.filter(s => {
      return s.title === skill.title;
    });
    if (personSkills.length > 0) {
      // TODO: Dialog here
      console.log('you already have this skill');
    }
    else {
      this.profileService.addSkill(skill).subscribe(res => {
        this.profile = res;
      });
    }
  }


  updateSkill(skill: Skill){
    this.profileService.editSkill(skill).subscribe(res => {
      this.profile = res;
    });
  }

}
