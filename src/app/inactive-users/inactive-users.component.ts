import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.userService.onSetActiveUsers(id);
    this.onSetUsers();
  }

  onSetUsers() {
    this.users = this.userService.getInactiveUsers();
  }
}
