import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public data:AlldataService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.data.skill.value)
  }

}
