import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AsclepionSPA';
  medics: any;

  constructor(private http: HttpClient, private authService: AuthService) 
  {

  }
  
  ngOnInit() {
    //this.getMedics();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.authService.setCurrentUser(user);
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
