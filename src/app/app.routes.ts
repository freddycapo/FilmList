import { Routes } from '@angular/router';
import { Add } from './pages/add/add';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: 'add',
        component: Add
    },
    
    {
        path: '',
        component: Home
    },
    // add/:id capire se modificare, visualizzazione, aggiunta
];
