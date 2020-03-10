import { Component, OnInit} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';

import { ProfileDataService } from './../services/profile-data.service';

declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})

export class UserProfileComponent implements OnInit, AfterViewInit {

  constructor(private cookieService : CookieService,
    private router: Router,
    public profileData: ProfileDataService) { }

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
    if(!(this.cookieService.get("notified") == "true")){
      this.showNotification();
      this.cookieService.set("notified", "true", 1)
    }

    var t: Array<{ tech:string, used: number }> = [];
    this.profileData.projects.forEach(function (el) {
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

  ngAfterViewInit(){
    if(this.router.url.indexOf("#") != -1){
      var hash = this.router.url.substring(this.router.url.indexOf("#")+1);
      this.scrollMe(hash);
      let el = document.getElementById(hash+"_ql");
      el.click();
    }
  }

  public techs;

  scrollMe(id: string) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
