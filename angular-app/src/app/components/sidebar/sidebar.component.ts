import { Component, OnInit } from '@angular/core';

import { AdsenseModule } from 'ng2-adsense';

import {Globals} from '../../../globals';

import { DomSanitizer } from '@angular/platform-browser';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/profile', title: 'Profile',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [Globals]
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

  constructor(public globals: Globals, private _DomSanitizationService: DomSanitizer ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
