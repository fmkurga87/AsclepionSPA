import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { medic } from '../_models/medic';
import { paginatedSearchResult } from '../_models/paginatedSearchResult';

@Injectable({
  providedIn: 'root'
})
export class MedicsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMedics(){
    const httpOptions = {
        params: new HttpParams()
        .set('numeroPagina', 1)
        .set('cantidadPagina', 10)
        .set('entidadOrdenamiento', "")
        .set('direccionOrdenamiento', 1),
    }
            
    return this.http.get<paginatedSearchResult>(this.baseUrl + 'Medicos', httpOptions);
  }

  getMedic(medicId: string){
    return this.http.get<medic>(this.baseUrl + 'Medicos/'+medicId);
  }

}
