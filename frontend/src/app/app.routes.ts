import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListarMeserosComponent } from './meseros/listar-meseros/listar-meseros.component';
import { UpdateMeseroComponent } from './meseros/update-mesero/update-mesero.component';
import { AddMeserosComponent } from './meseros/add-meseros/add-meseros.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'meseros', component: ListarMeserosComponent},
    {path: 'addMesero', component: AddMeserosComponent},
    {path: 'updateMesero/:id', component: UpdateMeseroComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];
