import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
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
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('menuTrigger', [
      state('inactive', style({
        position: 'relative',
        height: '0',
        overflow: 'hidden',
        transition: 'height .35s ease'
      })),
      state('active', style({
        height: '100%',
        display: 'block'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Input() public options: any;
  @Input() public items: Array<MenuItem>;

  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      // alert('clicked Inside');
    } else {
      // alert('clicked Outside');
      this.closeAllSubmenus();
    }
  }

  private active: boolean;
  private menuItems: any;

  constructor(private globalService: GlobalService, private elementRef: ElementRef) { 
  }

  ngOnInit() {
    this.globalService.sidebarActive$.subscribe(
      status => {
        this.active = status;
      });
  }

  closeAllSubmenus() {
    this.items.forEach((item) => {
      item.show = false;
    });
  }
}
