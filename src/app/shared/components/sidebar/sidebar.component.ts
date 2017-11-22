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
  private menuItems: any;

  constructor(private globalService: GlobalService) { 
    this.menuItems = [
      {
        'title': 'Home',
        'icon': 'glyphicon glyphicon-home',
        'show': false,
        'path': '/home',
        'children': []
      },
      {
        'title': 'Create Briefing',
        'icon': 'glyphicon glyphicon-briefcase',
        'show': false,
        'disabled': false,
        'children': [
          {
            'title': 'Create New Briefing',
            'icon': 'icon-note',
            'path': '/home/create-briefing/general-information'
          },
          {
            'title': 'From Templates',
            'icon': 'icon-note',
            'path': '/home/create-briefing/select-template'
          }
        ]
      },
      {
        'title': 'Documents',
        'icon': 'glyphicon glyphicon-duplicate',
        'show': false,
        'path': '/home/documents/user-documents',
        'children': []
      },
      {
        'title': 'Briefing Setup',
        'icon': 'glyphicon glyphicon-link',
        'show': false,
        'disabled': false,
        'children': [
          {
            'title': 'General',
            'icon': 'icon-bar-chart',
            'path': '/home/edit-briefing/general-info'
          },
          {
            'title': 'Matrix',
            'icon': 'icon-grid',
            'path': '/home/edit-briefing/matrix'
          },
          {
            'title': 'Templates',
            'icon': 'icon-book-open',
            'path': '/home/edit-briefing/templates'
          }
        ]
      },
      {
        'title': 'Users',
        'icon': 'glyphicon glyphicon-paperclip',
        'show': false,
        'disabled': true,
        'children': [
          {
            'title': 'Manage Users',
            'icon': 'icon-user',
            'path': '/home/user-management'
          },
          {
            'title': 'Manage Team',
            'icon': 'icon-users',
            'path': '/home/team-management'
          }
        ]
      }
    ]
  }

  ngOnInit() {
    this.globalService.sidebarActive$.subscribe(
      status => {
        this.active = status;
      });
  }

  selectMenu(menu) {
    // this.menuItems.forEach(element => {
    //   element.show = false;
    // });
  }

}
