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
import { NotFoundComponent } from './error/not-found/not-found.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { TurnEditComponent } from './turns/turn-edit/turn-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'Turnos', component: TurnListComponent},
      {path: 'Turnos/:id', component: TurnDetailComponent},
      {path: 'Turno/Edit', component: TurnEditComponent},
      {path: 'Medicos', component: MedicListComponent},
      {path: 'Medicos/:id', component: MedicDetailComponent},
      {path: 'Centros', component: CenterListComponent},
      {path: 'Centros/:id', component: CenterDetailComponent},
      {path: 'Calendario', component: CalendarComponent},
      {path: 'Usuarios', component: UserListComponent},
      {path: 'Usuarios/:id', component: UserCardComponent},
    ]
  },  
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
