import { Component, OnInit } from '@angular/core';
import { WithoutPipe } from 'ngx-pipes';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-checkdata',
  templateUrl: './checkdata.component.html',
  styleUrls: ['./checkdata.component.scss'],
  providers: [WithoutPipe]

})
export class CheckdataComponent implements OnInit {
  constructor(public data : AlldataService , public WithoutPipe : WithoutPipe) { }
  sortExperience:any;
  ngOnInit(): void {  
  }
  asIsOrder(a:any, b:any) {
    return a > b;
  }
  
}
