import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TurnListComponent } from './turns/turn-list/turn-list.component';
import { TurnDetailComponent } from './turns/turn-detail/turn-detail.component';
import { MedicListComponent } from './medics/medic-list/medic-list.component';
import { MedicDetailComponent } from './medics/medic-detail/medic-detail.component';
import { CenterDetailComponent } from './centers/center-detail/center-detail.component';
import { CenterListComponent } from './centers/center-list/center-list.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'Turnos', component: TurnListComponent},
      {path: 'Turnos/:id', component: TurnDetailComponent},
      {path: 'Medicos', component: MedicListComponent},
      {path: 'Medicos/:id', component: MedicDetailComponent},
      {path: 'Centros', component: CenterListComponent},
      {path: 'Centros/:id', component: CenterDetailComponent},
      {path: 'Calendario', component: CalendarComponent},
    ]
  },  
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
