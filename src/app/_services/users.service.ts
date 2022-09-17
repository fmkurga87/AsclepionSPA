import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userRole } from '../_models/userRole';
import { paginatedSearchResult } from '../_models/paginatedSearchResult';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(){
    const httpOptions = {
      params: new HttpParams()
      .set('numeroPagina', 1)
      .set('cantidadPagina', 10)
      .set('entidadOrdenamiento', "")
      .set('direccionOrdenamiento', 1),
  }

    return this.http.get<paginatedSearchResult>(this.baseUrl + 'Auth/Usuarios', httpOptions);
  }

  getUser(userid: string){
    return this.http.get<userRole>(this.baseUrl + 'Auth/Usuarios/'+userid);
  }
}
