import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public data :AlldataService) { }

  ngOnInit(): void {

  }
submit(){
  console.log()
}


}
