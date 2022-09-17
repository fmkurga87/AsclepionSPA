import { Component, Input, OnInit } from '@angular/core';
import { medic } from 'src/app/_models/medic';

@Component({
  selector: 'app-medic-card',
  templateUrl: './medic-card.component.html',
  styleUrls: ['./medic-card.component.css']
})
export class MedicCardComponent implements OnInit {
  @Input() medic: medic
  
  constructor() { }

  ngOnInit(): void {
  }

}
