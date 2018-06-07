import { Component, OnInit } from '@angular/core';

import {Globals} from '../../globals';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [Globals]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
