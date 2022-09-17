import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  
  constructor(public authService : AuthService, private router: Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login(): void 
  {
    this.authService.login(this.model).subscribe(
                                { next: response => {
                                                      //console.log(response);
                                                      this.router.navigateByUrl("/Calendario");
                                                    },
                                  // error:  error =>  {
                                  //                     console.log(error);
                                  //                     this.toastr.error(error.error);
                                  //                   }
                                });
  }

  logout() 
  {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
