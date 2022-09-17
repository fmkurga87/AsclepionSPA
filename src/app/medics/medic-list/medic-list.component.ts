import { Component, OnInit } from '@angular/core';
import { medic } from 'src/app/_models/medic';
import { paginatedSearchResult } from 'src/app/_models/paginatedSearchResult';
import { MedicsService } from 'src/app/_services/medics.service';

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.component.html',
  styleUrls: ['./medic-list.component.css']
})
export class MedicListComponent implements OnInit {
  response: paginatedSearchResult;
  medics: medic[];

  constructor(private medicsService: MedicsService) { }

  ngOnInit(): void {
    this.loadMedics();
  }

  loadMedics(){
    this.medicsService.getMedics().subscribe({
                                          next: response => {
                                            console.log(response);
                                                              this.response = response;
                                                              this.medics = response.elementos;
                                                            },
                                          })
  }

}
