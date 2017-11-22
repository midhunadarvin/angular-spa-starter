import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { GlobalService } from '../../../services/global.service';
import { MenuItem } from '../../models/menu-item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() public options: any;
  @Input() public items: Array<MenuItem>;

  private active: boolean;
  private menuItems: any;

  constructor(private globalService: GlobalService) { 
  }

  ngOnInit() {
    this.globalService.sidebarActive$.subscribe(
      status => {
        this.active = status;
      });
  }
}