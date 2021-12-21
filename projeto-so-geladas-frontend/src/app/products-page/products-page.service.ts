import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_BACKEND = 'http://localhost:4000/';
@Injectable({
  providedIn: 'root'
})
export class ProductsPageService {

  constructor(private http: HttpClient) { }


  listarProdutos() : Observable<any>{
    return this.http.get(API_BACKEND + 'listar-produtos')
  }
}
