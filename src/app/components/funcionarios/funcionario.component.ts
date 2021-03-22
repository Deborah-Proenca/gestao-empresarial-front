import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario} from './funcionario.interface';
import { FuncionarioService } from './funcionario.service';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  funcionario: Funcionario[] = [
  ];
  columnsToDisplay = ['id','nomeCompleto','cpf', 'cargo','acoes']
  constructor(private funcionarioService: FuncionarioService, private router: Router) { }
  
  ngOnInit(): void {
    this.funcionarioService.read().subscribe(
      funcionario =>  {
        console.log(funcionario)
        this.funcionario = funcionario
      }
      )
  }

  navigateToFuncionarioCreate(): void{
    this.router.navigate(['/funcionario/cadastro'])
  }

  delete(id: number) {
    this.funcionarioService.delete(id).subscribe(
      data => {
        this.funcionarioService.showMessage('Funcionario excluído com Sucesso')
        this.funcionarioService.read().subscribe(
          funcionario =>  {
            console.log(funcionario)
            this.funcionario = funcionario
          }
          )
      }
    );
    this.router.navigate(['/funcionario'])
  }

}
