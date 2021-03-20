import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  
  baseUrl = "http://localhost:8080/funcionarios/"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.baseUrl,funcionario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!',true)
    return EMPTY
  }

  read(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

  readById(id: string){
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url)
  }

  update(funcionario: Funcionario): Observable<Funcionario>{
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<Funcionario>(url,funcionario)
  }

  delete(id: number): Observable<Funcionario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Funcionario>(url)
  }
}


