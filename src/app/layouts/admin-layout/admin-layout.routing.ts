import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', component: UserProfileComponent },
    { path: '**', component: UserProfileComponent },
];
