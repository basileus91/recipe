import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {
  lastlog: string;

  printLog(message: string): void {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }

}
