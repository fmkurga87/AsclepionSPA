import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

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
    CalendarComponent
  ],
  imports: [
    // Si esto se vuelve muy desorganizado, ver el video 73 del curso.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
