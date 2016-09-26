/**
 * Created by littlestone on 2016/9/24.
 */
import {Component} from "@angular/core";

import { UserService} from '../../service/user.service'
import { User } from '../../class/User';
import { Logger } from "../../service/logger.service";
import {BetterLogger} from "../../service/betterLogger";
import {LoggerHelper} from "../../service/loggerHelper.service";

@Component({
  selector: 'validate-form',
  templateUrl: './ValidateForm.template.html',
  providers: [
    UserService,
    [{provider: Logger, userClass: BetterLogger}],
    // [LoggerHelper, {provide: Logger, userClass: BetterLogger}]
    // Logger
  ],
})

export class ValidateFormComponent {
  // active: boolean = true
  /*favoriteFruitList = ['apple', 'pear', 'banana', 'orange'];
  user = new User('dreamapple', '2451123321@qq.com', 'Nothing is impossible!', this.favoriteFruitList[0]);*/
  users : User[]
  constructor(private userService: UserService){
    this.users = userService.getUsers();
  }

  /*get userInfo() {
    return JSON.stringify(this.user);
  }

  addUser() {
    console.log(this.user);
    this.active = false;
    this.user = new User('', '', '', '');
    setTimeout(() => this.active = true, 0);
  }

  submitForm() {
    alert(this.userInfo + '已经被提交!');
  }*/
}