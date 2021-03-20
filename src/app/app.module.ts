import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpresaCreateComponent } from './components/empresas/empresa-create/empresa-create.component';
import { EmpresaDeleteComponent } from './components/empresas/empresa-delete/empresa-delete.component';
import { EmpresaUpdateComponent } from './components/empresas/empresa-update/empresa-update.component';
import { EmpresaReadComponent } from './components/empresas/empresa-read/empresa-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FuncionarioComponent } from './components/funcionarios/funcionario.component';
import { FuncionarioDeleteComponent } from './components/funcionarios/funcionario-delete/funcionario-delete.component';
import { FuncionarioCreateComponent } from './components/funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './components/funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/funcionarios/funcionario-update/empresa-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EmpresasComponent,
    EmpresaCreateComponent,
    EmpresaDeleteComponent,
    EmpresaUpdateComponent,
    EmpresaReadComponent,
    FuncionarioComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioUpdateComponent,
    FuncionarioReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
