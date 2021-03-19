import { Injectable } from '@angular/core';
import { Empresa } from './empresa.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  
  baseUrl = "http://localhost:8080/"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.baseUrl,empresa).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!',true)
    return EMPTY
  }

  read(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.baseUrl)
  }

  readById(id: string){
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Empresa>(url)
  }

  update(empresa: Empresa): Observable<Empresa>{
    const url = `${this.baseUrl}/${empresa.id}`
    return this.http.put<Empresa>(url,empresa)
  }

  delete(id: string): Observable<Empresa>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Empresa>(url)
  }

}


