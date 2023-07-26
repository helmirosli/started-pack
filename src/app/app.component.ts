import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'started-angular';

  constructor(private appService: AppService) {
  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  users: any[] = [];
  userCount = 0;

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
    const data = this.appService.addUser(this.userForm.value);
    this.userCount++;
    this.userForm.reset();
  }

  getAllUsers() {
    this.users = this.appService.getUsers();
    this.userCount = this.users.length;
  }
}
