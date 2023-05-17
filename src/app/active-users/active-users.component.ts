import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  countAcToIn: number;

  constructor(private userService: UserService,
              private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
    this.countAcToIn = 0;
  }

  onSetToInactive(id: number) {
    this.userService.onSetInactiveUsers(id);
    this.countAcToIn = this.counterService.getCountAcToIn();
    this.onSetUsers();
  }

  onSetUsers() {
    this.users = this.userService.getActiveUsers();
  }
}
