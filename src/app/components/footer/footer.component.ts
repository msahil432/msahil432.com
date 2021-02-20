import { Component, OnInit } from '@angular/core';

import { ProfileDataService } from 'app/services/profile-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor(public profileData: ProfileDataService) { }

  ngOnInit() {
  }

}
