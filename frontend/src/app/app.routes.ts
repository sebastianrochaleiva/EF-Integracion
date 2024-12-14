import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListarMeserosComponent } from './meseros/listar-meseros/listar-meseros.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'meseros', component: ListarMeserosComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];
