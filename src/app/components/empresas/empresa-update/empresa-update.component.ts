import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa.interface';
import { EmpresaService } from '../empresas.service';

@Component({
  selector: 'app-empresa-update',
  templateUrl: './empresa-update.component.html',
  styleUrls: ['./empresa-update.component.scss']
})
export class EmpresaUpdateComponent implements OnInit {

  empresa: Empresa | undefined;

  empresaForm!: FormGroup 

  msgPrice: boolean = false

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
      this.empresa = empresa
      this.empresaForm?.patchValue(empresa)
    });

    
  }

  updateEmpresa(): void{
    console.log (this.empresaForm)
    this.empresaService.update(this.empresaForm?.value).subscribe(
      () => {this.empresaService.showMessage('Empresa Editada')
      this.router.navigate(['/empresas'])}
      )
  }

  cancel(): void{
    this.router.navigate(['/empresas'])
  }

}
