import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalService {
  public sidebarActive$: Observable<boolean>;

  private sidebarActive: boolean;
  private sidebarActiveSource = new Subject<boolean>();

  constructor() { 
    this.sidebarActive$ = this.sidebarActiveSource.asObservable();
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    this.sidebarActiveSource.next(this.sidebarActive);
  }

}
