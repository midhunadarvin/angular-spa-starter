import { Component, OnInit } from '@angular/core';

import { AppConfig } from "../config/app.config";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidebarConfig: any;

  constructor() { 
    this.sidebarConfig = AppConfig.sidebarCompressedConfig;
  }

  ngOnInit() {
  }

}
