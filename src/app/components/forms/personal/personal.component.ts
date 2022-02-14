import { Component, OnInit } from '@angular/core';
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
get fullname():any{
  return this.data.personalData.get("fullname")
}
get jobtitle():any{
  return this.data.personalData.get("jobtitle")
}
get address():any{
  return this.data.personalData.get("address")
}
get phone():any{
  return this.data.personalData.get("phone")
}
}
