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

  // empresas: Empresa[] = []
  empresas: Empresa[] = [
    {id: 1, razaoSocial: 'Hydrogen', nomeFantasia: '1.0079', quantidadeFuncionario: 2, situacao: true},
    {id: 2, razaoSocial: 'Helium', nomeFantasia: '4.0026', quantidadeFuncionario: 2, situacao: true},
    {id: 3, razaoSocial: 'Lithium', nomeFantasia: '6.941', quantidadeFuncionario: 2, situacao: true},
    {id: 4, razaoSocial: 'Beryllium', nomeFantasia: '9.0122', quantidadeFuncionario: 2, situacao: true},
    {id: 5, razaoSocial: 'Boron', nomeFantasia: '10.811', quantidadeFuncionario: 2, situacao: true},
    {id: 6, razaoSocial: 'Carbon', nomeFantasia: '12.0107', quantidadeFuncionario: 2, situacao: true},
    {id: 7, razaoSocial: 'Nitrogen', nomeFantasia:'14.0067', quantidadeFuncionario: 2, situacao: true},
    {id: 8, razaoSocial: 'Oxygen', nomeFantasia: '15.9994', quantidadeFuncionario: 2, situacao: true},
    {id: 9, razaoSocial: 'Fluorine', nomeFantasia: '18.9984', quantidadeFuncionario: 2, situacao: true},
    {id: 10, razaoSocial: 'Neon', nomeFantasia: '20.1797', quantidadeFuncionario: 2, situacao: true},
  ];
  columnsToDisplay = ['id','razaoSocial','nomeFantasia', 'quantidadeFuncionarios','acoes', 'situacao']
  constructor(private empresaService: EmpresaService, private router: Router) { }
  
  ngOnInit(): void {
    this.empresaService.read().subscribe(
      empresa =>  {
        this.empresas = empresa
      }
      )
  }

  navigateToEmpresaCreate(): void{
    this.router.navigate(['/empresas/cadastro'])
  }
}
