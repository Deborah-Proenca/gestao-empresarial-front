import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../empresas.service';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss']

})
export class EmpresaCreateComponent implements OnInit {

  
  empresa!: FormGroup;

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  get razaoSocial() {
    return this.empresa.get('razaoSocial');
  }

  get nomeFantasia() {
    return this.empresa.get('nomeFantasia');
  }

  /**
   * Get para recuperar o AbstractControl de quantidadeFunionario
   * com ele fica mais facil de pegar o valor direto
   */
  get quantidadeFuncionario() {
    return this.empresa.get('quantidadeFuncionario');
  }

  ngOnInit(): void {
    this.empresa = this.formBuilder.group({
      razaoSocial:['', Validators.required],
      nomeFantasia:['',Validators.required],
      quantidadeFuncionario:['',Validators.required],
    })
  }

  cancel(): void{
    this.router.navigate(['/empresas'])
  }

  createEmpresa(): void{

    this.empresaService.create(this.empresa?.value).subscribe( () => {
      this.empresaService.showMessage('Empresa Cadastrada com Sucesso')
      this.router.navigate(['/empresas'])
    })
  }
}
