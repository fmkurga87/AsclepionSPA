import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancela = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.model).subscribe({
                                            next: response => {
                                                    console.log(response);
                                                    this.cancel();
                                                  },
                                            error:  error => {console.log(error)}
                                          });

  }

  cancel(){
    this.cancela.emit(false);
  }

}
