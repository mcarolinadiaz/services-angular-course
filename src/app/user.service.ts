import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  onSetActiveUsers(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.setCountInToAc();
    console.log(this.counterService.getCountInToAc());
  }

  onSetInactiveUsers(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.setCountAcToIn();
    console.log(this.counterService.getCountAcToIn());
  }

  getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
  }

}
