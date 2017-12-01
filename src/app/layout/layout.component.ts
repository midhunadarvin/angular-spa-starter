import { Component, OnInit } from '@angular/core';

import { LayoutConfig } from '../config/layout.config';
import { MenuItem } from '../shared/models/menu-item.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidebarConfig: any;
  menuItems: Array<MenuItem>;

  constructor() {
    this.sidebarConfig = LayoutConfig.sidebarCompressedConfig;

    this.menuItems = [
      {
        'title': 'Home',
        'icon': 'glyphicon glyphicon-home',
        'show': false,
        'path': '/',
        'children': []
      },
      {
        'title': 'About',
        'icon': 'glyphicon glyphicon-briefcase',
        'show': false,
        'path': '/about',
        'children': []
      },
      {
        'title': 'Sample Menu',
        'icon': 'glyphicon glyphicon-duplicate',
        'show': false,
        'disabled': false,
        'children': [
          {
            'title': 'Sub Menu Item 1',
            'icon': 'icon-note',
            'path': '/home'
          },
          {
            'title': 'Sub Menu Item 1',
            'icon': 'icon-note',
            'path': '/home'
          }
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
