import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { EstadoCrudComponent } from "./views/estado-crud/estado-crud.component";
import { CidadeCrudComponent } from "./views/cidade-crud/cidade-crud.component";
import { EstadoCreateComponent } from "./components/estado/estado-create/estado-create.component";
import { EstadoUpdateComponent } from './components/estado/estado-update/estado-update.component';
import { EstadoDeleteComponent } from './components/estado/estado-delete/estado-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "estados",
    component: EstadoCrudComponent
  },
  {
    path: "estados/create",
    component: EstadoCreateComponent
  },
  {
    path: "cidades",
    component: CidadeCrudComponent
  },
  {
    path: "estados/update/:id",
    component: EstadoUpdateComponent
  },
  {
    path: "estados/delete/:id",
    component: EstadoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
