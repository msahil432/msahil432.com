import { Component, OnInit } from '@angular/core';

import {Globals} from '../../../globals';

import { AdsenseModule } from 'ng2-adsense';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [Globals]
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
