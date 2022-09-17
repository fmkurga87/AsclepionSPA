import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TurnListComponent } from './turns/turn-list/turn-list.component';
import { TurnDetailComponent } from './turns/turn-detail/turn-detail.component';
import { MedicListComponent } from './medics/medic-list/medic-list.component';
import { MedicDetailComponent } from './medics/medic-detail/medic-detail.component';
import { CenterListComponent } from './centers/center-list/center-list.component';
import { CenterDetailComponent } from './centers/center-detail/center-detail.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { MedicCardComponent } from './medics/medic-card/medic-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { TurnEditComponent } from './turns/turn-edit/turn-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    TurnListComponent,
    TurnDetailComponent,
    MedicListComponent,
    MedicDetailComponent,
    CenterListComponent,
    CenterDetailComponent,
    CalendarComponent,
    UserListComponent,
    UserCardComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MedicCardComponent,
    TurnEditComponent
  ],
  imports: [
    // Si esto se vuelve muy desorganizado, ver el video 73 del curso.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    FontAwesomeModule,
    TabsModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
