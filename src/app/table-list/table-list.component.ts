import { Component, OnInit } from '@angular/core';

import {Globals} from '../../globals';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers : [Globals]
})
export class TableListComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
