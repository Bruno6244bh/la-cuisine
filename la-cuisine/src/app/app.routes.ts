import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
];

// //tentativa de configuração do roteamento

// export const appRoutingProviders = [
//     provideRouter(routes)
// ]