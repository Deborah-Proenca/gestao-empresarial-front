import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from './empresa.interface';
import { EmpresaService } from './empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  empresas: Empresa[] = [];
  columnsToDisplay = ['id','razaoSocial','nomeFantasia', 'quantidadeFuncionarios','acoes', 'situacao']
  constructor(private empresaService: EmpresaService, private router: Router) { }
  
  ngOnInit(): void {
    this.empresaService.read().subscribe(
      empresa =>  {
        console.log(empresa)
        this.empresas = empresa
      }
      )
  }

  navigateToEmpresaCreate(): void{
    this.router.navigate(['/empresas/cadastro'])
  }

  delete(id: number) {
    this.empresaService.delete(id).subscribe(
      data => console.log(data)
    );
  }
}
