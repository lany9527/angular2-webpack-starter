/**
 * Created by littlestone on 2016/9/26.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class Logger{
  logs: string[] = [];
  log(msg) {
    this.logs.push(msg);
    console.warn('From logger class:' + msg);
  }
}