import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { turnos } from '../_models/turnos';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTurns(){
    const httpOptions = {
      params: new HttpParams()
      .set('Dia', "07/09/2022")
      .set('MedicoId', 2551)
      .set('CentroDeSaludId', 1),
  }
          
  return this.http.get<turnos>(this.baseUrl + 'Turnos/Dia', httpOptions);
  }
}
