import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarConfig: any;
  sidebarNormalConfig: any;
  sidebarFixedConfig: any;
  sidebarOverlayConfig: any;
  sidebarCompressedConfig: any;
  constructor() { 
    this.sidebarNormalConfig = {
      'normal': true,
      'main': {

      },
      'inner-wrap': {

      }
    } 

    this.sidebarFixedConfig = {
      'main': {

      },
      'inner-wrap': {
        'width': '250px',
        'position': 'fixed'
      }
    } 

    this.sidebarOverlayConfig = {
      'overlay': true,
      'inner-wrap': {
        'position': 'relative'
      }
    } 

    this.sidebarCompressedConfig = {
      'compress': true,
      'main': {

      },
      'inner-wrap': {

      }
    } 

    this.sidebarConfig = this.sidebarCompressedConfig;
  }

  ngOnInit() {
  }

}
