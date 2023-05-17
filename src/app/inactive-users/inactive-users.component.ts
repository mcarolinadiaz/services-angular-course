import {Component, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  countInToAc: number;

  constructor(private userService: UserService,
              private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.userService.getInactiveUsers();
    this.countInToAc = this.counterService.getCountInToAc();
  }

  onSetToActive(id: number) {
    this.userService.onSetActiveUsers(id);
    this.onSetUsers();
    this.countInToAc = this.counterService.getCountInToAc();
  }

  onSetUsers() {
    this.users = this.userService.getInactiveUsers();
  }
}
