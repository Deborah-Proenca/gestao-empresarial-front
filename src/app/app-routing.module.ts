import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
import { EmpresasComponent } from './components/empresas/empresas.component';

const routes: Routes = [

  {
    path: "empresas",
    children: [
      {
        path: '',
        component: EmpresasComponent,
      },
      {
        path: 'cadastro',
        component: EmpresaCreateComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 