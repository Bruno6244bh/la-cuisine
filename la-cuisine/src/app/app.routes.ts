import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
    },
    // {
    //     path: 'menu',
    //     component: MenuComponent,
    // },
];

// //tentativa de configuração do roteamento

// export const appRoutingProviders = [
//     provideRouter(routes)
// ]