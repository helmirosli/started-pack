import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  users = [
    {
      firstName: 'fname1',
      lastName: 'lname1',
      email: 'abc@gmail.com'
    },
    {
      firstName: 'fname2',
      lastName: 'lname2',
      email: 'abd@gmail.com'
    },
    {
      firstName: 'fname3',
      lastName: 'lname3',
      email: 'abe@gmail.com'
    }
  ]

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    return this.users.push(user);
  }
}
