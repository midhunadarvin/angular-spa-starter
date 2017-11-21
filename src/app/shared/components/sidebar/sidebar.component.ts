import { Component, OnInit, Input } from '@angular/core';

import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() public options: any;
  private active: boolean;
  constructor(private globalService: GlobalService) { 
    
  }

  ngOnInit() {
    console.log(this.options);
    this.globalService.sidebarActive$.subscribe(
      status => {
        this.active = status;
      });
  }

}
