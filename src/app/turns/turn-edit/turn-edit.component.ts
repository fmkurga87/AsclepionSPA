import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-turn-edit',
  templateUrl: './turn-edit.component.html',
  styleUrls: ['./turn-edit.component.css']
})
export class TurnEditComponent implements OnInit {
  @Input() dia : string;
  @Input() hora : string;
  @Input() medicoId = 0;
  @Input() centroSaludId = 0;

  @Output() close = new EventEmitter<string>();
  newname = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.dia);
    console.log(this.hora);
    console.log(this.medicoId);
    console.log(this.centroSaludId);
  }

  confirm() {
    //this.close.emit(this.newname);
  }

  cancel() {
      this.close.emit(null);
  }

}
