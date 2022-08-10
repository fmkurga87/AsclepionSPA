import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AsclepionSPA';
  medics: any;

  constructor(private http: HttpClient) 
  {

  }
  
  ngOnInit() {
    this.getMedics();
  }

  getMedics() 
  {
    // Solo anda en Chrome porque lo configure para que no vea certificados en localhost. 
    // Por cualquier cosa ver la clase 30 del curso de .net core+angular
    this.http.get("https://localhost:7020/api/Medicos")
              .subscribe({next: response => this.medics = response,
                          error: error => console.log(error) });
  }
}
