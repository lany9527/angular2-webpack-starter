/**
 * Created by littlestone on 2016/9/26.
 */
import { Injectable } from '@angular/core';
import { Users } from '../mock/UserData.mock';
import { Logger } from './logger.service'

@Injectable()
export class UserService {
  constructor(private logger: Logger){

  }
  getUsers() {
    this.logger.log('get users');
    return Users;
  }
}























