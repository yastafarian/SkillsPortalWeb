import {Component, Inject, OnInit} from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA  } from '@angular/material';
import { RegForm} from "../../models/reg-form";
import { Person} from "../../models/person";
import { AvailSkill} from "../../models/avail-skill";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Person;

  constructor(
      @Inject(MD_DIALOG_DATA) private data: { profile: Person },
      public dialogRef: MdDialogRef<ProfileComponent>
  ) { }

  ngOnInit() {
    this.profile = this.data.profile;
  }

}
