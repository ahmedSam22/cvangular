import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(public data : AlldataService) { }

  ngOnInit(): void {
  }

  @ViewChild('forPrint', { static: true })



  
   pdf = new jsPDF('p','pt','a4');


  print(){
   const forprint:any = document.getElementById("forPrint")

   const doc = new jsPDF({
    orientation: "p",
    unit: "px",
    format: [1024, 700]
  });
  doc.html(forprint, {
     callback: (doc) => {
       doc.save("Resume");
     }
  });
  
  }
  
}
