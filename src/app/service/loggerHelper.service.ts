/**
 * Created by littlestone on 2016/9/26.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerHelper {
  constructor() {
    console.warn('Just a logger helper!');
  }
}