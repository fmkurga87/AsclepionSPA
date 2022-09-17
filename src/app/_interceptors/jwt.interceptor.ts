import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;
    
    this.authService.currentUser$.pipe(take(1)).subscribe(user => currentUser = user);
    
    // ({
    //                                                         next: user => {
    //                                                                         currentUSer = user
    //                                                                       },
    //                                                         error:  error =>  
    //                                                                       {
    //                                                                         console.log("ASDF "+ error)
    //                                                                       }
    //                                                       });

    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }

    return next.handle(request);
  }
}
