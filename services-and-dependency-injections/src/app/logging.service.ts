import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: string) {
    console.log('this is from logging service: ' + message);
  }
}
