import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(public data : AlldataService) { }

  ngOnInit(): void {
  }

}
