import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarMeserosComponent } from './meseros/listar-meseros/listar-meseros.component';
import { UpdateMeseroComponent } from './meseros/update-mesero/update-mesero.component';
import { AddMeserosComponent } from './meseros/add-meseros/add-meseros.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { UpdateClienteComponent } from './clientes/update-clientes/update-clientes.component';
import { AddClientesComponent } from './clientes/add-clientes/add-clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias/listar-categorias.component';
import { AddCategoriasComponent } from './categorias/add-categorias/add-categorias.component';
import { UpdateCategoriaComponent } from './categorias/update-categoria/update-categoria.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'meseros', component: ListarMeserosComponent},
    {path: 'addMesero', component: AddMeserosComponent},
    {path: 'updateMesero/:id', component: UpdateMeseroComponent},
    {path: 'clientes', component: ListarClientesComponent},
    {path: 'addCliente', component: AddClientesComponent},
    {path: 'updateCliente/:id', component: UpdateClienteComponent},
    {path: 'categorias', component: ListarCategoriasComponent},
    {path: 'addCategoria', component: AddCategoriasComponent},
    {path: 'updateCategoria/:id', component: UpdateCategoriaComponent},
    {path:'**', component: ErrorComponent}
];