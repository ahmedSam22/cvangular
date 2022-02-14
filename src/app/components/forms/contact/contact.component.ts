import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/services/alldata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public data : AlldataService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.data.contact.value)
  }

  get email():any{
    return this.data.contact.get("email")
  }
  
}
