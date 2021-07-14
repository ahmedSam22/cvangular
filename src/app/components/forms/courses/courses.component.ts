import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public data:AlldataService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.data.course.value , this.data.hoppy.value)
  }
}
