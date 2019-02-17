import { Injectable } from '@angular/core';

@Injectable()
export class WindRefService {
  getNative() {
    return window;
  }
}
