import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresas/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresas/empresa-update/empresa-update.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FuncionarioCreateComponent } from './components/funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioComponent } from './components/funcionarios/funcionario.component';

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
      },
      {
        path: 'editar/:id',
        component: EmpresaUpdateComponent,
      },
      {
        path: 'info/:id',
        component: EmpresaReadComponent,
      }
    ]
  },

  {
    path: "funcionario",
    children: [
      {
        path: '',
        component: FuncionarioComponent,
      },
      {
        path: 'cadastro',
        component: FuncionarioCreateComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 