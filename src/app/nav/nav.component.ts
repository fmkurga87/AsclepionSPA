import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {}

  
  constructor(public authService : AuthService) { }

  ngOnInit(): void {

  }

  login(): void 
  {
    this.authService.login(this.model).subscribe(
                                { next: response => {
                                                      console.log(response);
                                                    },
                                  error:  error => console.log(error)
                                });
  }

  logout() 
  {
    this.authService.logout();
  }

}
