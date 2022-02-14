import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public data :AlldataService) { }

  ngOnInit(): void {
    this.data.autocompletefilter()
  }
  submit(){
    console.log(this.data.education.value)
  }
}
