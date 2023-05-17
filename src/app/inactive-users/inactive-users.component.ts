import {Component, OnInit, Output} from '@angular/core';
import {UserStatusService} from '../user-status.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserStatusService) {
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
