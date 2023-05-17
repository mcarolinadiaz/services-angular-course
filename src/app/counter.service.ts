import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  actionInactiveToActive = 0;
  actionActiveToInactive = 0;

  getCountInToAc() {
    console.log(this.actionInactiveToActive);
    return this.actionInactiveToActive;
  }

  getCountAcToIn() {
    console.log(this.actionActiveToInactive);
    return this.actionActiveToInactive;
  }

  setCountInToAc() {
    this.actionInactiveToActive = this.actionInactiveToActive + 1;
  }

  setCountAcToIn() {
    this.actionActiveToInactive = this.actionActiveToInactive + 1;
    console.log(this.actionActiveToInactive);
  }

}
