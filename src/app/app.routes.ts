import { Routes } from '@angular/router';
import { Add } from './pages/add/add';
import { Home } from './pages/home/home';
import { ViewPageComponent } from './pages/view-page-component/view-page-component';

export const routes: Routes = [
    {
        path: 'add',
        component: Add
    },

    {
        path: 'edit/:id', // call detail, use View/Edit blocca la form in readonly, slocca in edit mode 
        component: Add
    },
    
    {
        path: '',
        component: Home
    },

    {
        path: 'view',
        component: ViewPageComponent
    }
    // add/:id capire se modificare, visualizzazione, aggiunta
];
