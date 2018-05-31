import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GhSearchComponent} from './components/gh-search/gh-search.component';
import { UserComponent } from './components/gh-search/user/user.component';

const appRoutes: Routes = [
    {
        path: 'ghSearch',
        component: GhSearchComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);