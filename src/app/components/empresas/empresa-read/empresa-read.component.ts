import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../funcionarios/funcionario.interface';
import { EmpresaService } from '../empresas.service';

@Component({
  selector: 'app-empresa-read',
  templateUrl: './empresa-read.component.html',
  styleUrls: ['./empresa-read.component.scss']
})
export class EmpresaReadComponent implements OnInit {

  empresaForm!: FormGroup 

  msgPrice: boolean = false

  funcionario: Funcionario[] = [];

  columnsToDisplay = ['id','nomeCompleto','cpf', 'cargo']
  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.empresaForm = this.formBuilder.group({
      razaoSocial:['', Validators.required],
      nomeFantasia:['',Validators.required],
      quantidadeFuncionario:['',Validators.required],
      id:[]
    })
    const id:string = (this.route.snapshot.paramMap.get('id') as string)
    this.empresaService.readById(+id).subscribe(empresa => {
      console.log(empresa.funcionarios)
      this.funcionario = empresa.funcionarios
      this.empresaForm?.patchValue(empresa)
    });

  }

  cancel(): void{
    this.router.navigate(['/empresas'])
  }

}
