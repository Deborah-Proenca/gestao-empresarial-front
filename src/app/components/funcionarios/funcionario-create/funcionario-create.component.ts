import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']

})
export class FuncionarioCreateComponent implements OnInit {

  
  funcionario!: FormGroup;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  get nomeCompleto() {
    return this.funcionario.get('nomeCompleto');
  }

  get cpf() {
    return this.funcionario.get('cpf');
  }

  get cargo() {
    return this.funcionario.get('cargo');
  }

  /**
   * Get para recuperar o AbstractControl de quantidadeFunionario
   * com ele fica mais facil de pegar o valor direto
   */
  get quantidadeFuncionario() {
    return this.funcionario.get('quantidadeFuncionario');
  }

  ngOnInit(): void {
    this.funcionario = this.formBuilder.group({
      cpf:['', Validators.required],
      nomeCompleto:['',Validators.required],
      cargo:['',Validators.required],
    })
  }

  cancel(): void{
    this.router.navigate(['/funcionario'])
  }

  createFuncionario(): void{
    console.log(this.funcionario)
    this.funcionarioService.create(this.funcionario?.value).subscribe( () => {
      this.funcionarioService.showMessage('Funcionario Cadastrada com Sucesso')
      this.router.navigate(['/funcionario'])
    })
  }
}
