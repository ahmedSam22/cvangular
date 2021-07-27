import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-checkdata',
  templateUrl: './checkdata.component.html',
  styleUrls: ['./checkdata.component.scss']
})
export class CheckdataComponent implements OnInit {

  constructor(public data : AlldataService) { }

  ngOnInit(): void {
  }

}
