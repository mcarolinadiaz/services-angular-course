import {Component, OnInit} from '@angular/core';
import {UserStatusService} from '../user-status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserStatusService) {
  }

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.onSetInactiveUsers(id);
    this.onSetUsers();
  }

  onSetUsers() {
    this.users = this.userService.getActiveUsers();
  }
}
