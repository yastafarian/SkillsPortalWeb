import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<LogoutComponent>,) {

  }

  ngOnInit() {
    this.title = 'Logging out';
    this.message = 'Are you sure you want to logout?';
  }

}
