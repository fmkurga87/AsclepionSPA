import { Component, OnInit } from '@angular/core';
import { turnos } from 'src/app/_models/turnos';
import { TurnsService } from '../../_services/turns.service';

@Component({
  selector: 'app-turn-list',
  templateUrl: './turn-list.component.html',
  styleUrls: ['./turn-list.component.css']
})
export class TurnListComponent implements OnInit {
  turnsList: turnos;
  showIt = false;
  turnoAux : string;

  constructor(private turnsService : TurnsService) { }
  
  ngOnInit(): void {
    this.getTurns();
  }

  getTurns()
  {
    this.turnsService.getTurns().subscribe({
                                            next: response => {
                                                                console.log(response);
                                                                this.turnsList = response;
                                                              },
                                            })
  }

  
  showModal(horaTurnoClickeado : string) {
      this.turnoAux = horaTurnoClickeado;
      this.showIt = true;
  }

  closeModal(newName: string) {
      this.showIt = false;
     // if (newName) this.name = newName;
  }
}
