import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { medic } from 'src/app/_models/medic';
import { MedicsService } from '../../_services/medics.service';

@Component({
  selector: 'app-medic-detail',
  templateUrl: './medic-detail.component.html',
  styleUrls: ['./medic-detail.component.css']
})
export class MedicDetailComponent implements OnInit {
  medic: medic;
  
  constructor(private medicsService: MedicsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMedic();
  }

  loadMedic() {
    this.medicsService.getMedic(this.route.snapshot.paramMap.get('id')).subscribe(medic => {
      this.medic = medic
    });
  }

}
