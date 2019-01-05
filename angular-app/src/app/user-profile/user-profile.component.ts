import { Component, OnInit } from '@angular/core';

import {Globals} from '../../globals';

import { AdsenseModule } from 'ng2-adsense';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [Globals]
})

export class UserProfileComponent implements OnInit {

  constructor(public globals: Globals) { }

  showNotification(){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "This site collects data about its visitors using <b>Google Analytics</b>."
    },{
        type: type[color],
        timer: 2000,
        placement: {
            from: "bottom",
            align: "center"
        }
    });
  }

  ngOnInit() {
    //Show Notification
    if(!this.globals.notified){
      this.showNotification();
      this.globals.notified=true;
    }

    var t: Array<{ tech:string, used: number }> = [];
    this.globals.myPro.forEach(function (el) {
      el.tech.forEach(function (techs) { 
        var found: boolean = false;
        var index = 0;
        t.forEach(function (s) {
          if (s.tech == techs) {
            found = true;
            t.splice(index, 1);
            t.push({ tech: techs, used: s.used + 1 });
          }
          index++;
        })
        if (!found) t.push({ tech: techs, used: 1 });
      })
    });
    
    this.techs = t.sort(function(a, b): number{
      return b.used-a.used;
    });
  }

  public techs;
}
