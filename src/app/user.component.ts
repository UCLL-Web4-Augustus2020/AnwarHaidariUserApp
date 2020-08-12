import {Component, OnInit} from '@angular/core';

import {User} from './user';
import {UserService} from './user.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;

  // dependency injection
  constructor(private userService: UserService) {
  }

  getUsers(): void {
    timer(0, 2500).subscribe(() => {
      this.userService.getUsers().subscribe(data => this.users = data);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  changeStatus(): void {
    this.userService.setStatus(this.selectedUser);
  }
}


