import { Injectable } from '@angular/core';
import { FormControl, FormGroup , FormArray, Validators, FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  constructor(public fb : FormBuilder) { }

/*  -------- personal information ----------*/
  personalData = new FormGroup({
    fullname : new FormControl(""),
    birthDay : new FormControl(""),
    jobtitle : new FormControl(""),
    address : this.fb.array([
      this.fb.control("")
    ])
  })

  get address(){
    return this.personalData.get("address") as FormArray
  }
  
  addaddress(){
    this.address.push(this.fb.control(""))
  }
/*  -------- personal information ----------*/

/*  -------- contact ----------*/

  contact = new FormGroup({
    email : new FormControl("" , Validators.required),
    github : new FormControl(""),
    linkedin : new FormControl(""),
    phone : this.fb.array([
      this.fb.control("")
    ])
  })

  get phone(){
    return this.contact.get("phone") as FormArray
  }
  addphone(){
    this.phone.push(this.fb.control(""))
  }


  submit(){
    console.log(this.personalData.value , this.contact.value)
  }
/*  -------- contacts ----------*/

  
 
}

