import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { AdsenseModule } from 'ng2-adsense';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: UserProfileComponent },
    { path: '**', component: UserProfileComponent },
];
