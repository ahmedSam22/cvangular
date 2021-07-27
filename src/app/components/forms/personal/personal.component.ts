import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormArray } from '@angular/forms';
import { AlldataService } from 'src/app/services/alldata.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  

  constructor(public data : AlldataService) { }

  ngOnInit(): void {
  }
submit(){
  console.log(this.data.personalData.controls)
}
}
