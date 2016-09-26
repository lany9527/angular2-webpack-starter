/**
 * Created by littlestone on 2016/9/26.
 */
import {Injectable} from '@angular/core';
// import {LoggerHelper} from './loggerHelper.service'

@Injectable()
export class BetterLogger{
  logs: string[] = [];
  // constructor(private loggerHelper: LoggerHelper){}
  log(msg) {
    this.logs.push(msg);
    console.warn('From better logger class: ' + msg);
  }
}
