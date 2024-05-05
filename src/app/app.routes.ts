import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./pages/home/home.component').then(c=>c.HomeComponent)},
    {path:'about',loadComponent:()=>import('./pages/about/about.component').then(c=>c.AboutComponent)}
];
