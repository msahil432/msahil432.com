import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { AdsenseModule } from 'ng2-adsense';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path: 'projects-list',     component: TableListComponent },

    { path: 'typography',     component: DashboardComponent },
    { path: 'api',          component: DashboardComponent },
    { path: 'maps',           component: DashboardComponent },
    { path: 'notifications',  component: DashboardComponent },
    
    { path: 'support',        component: UpgradeComponent },
    { path: '**',        component: DashboardComponent },
];
