import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'wishlist', component: WishListComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'account', component: AccountComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
