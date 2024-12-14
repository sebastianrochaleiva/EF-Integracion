import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarMeserosComponent } from './meseros/listar-meseros/listar-meseros.component';
import { UpdateMeseroComponent } from './meseros/update-mesero/update-mesero.component';
import { AddMeserosComponent } from './meseros/add-meseros/add-meseros.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'meseros', component: ListarMeserosComponent},
    {path: 'addMesero', component: AddMeserosComponent},
    {path: 'updateMesero/:id', component: UpdateMeseroComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
];
