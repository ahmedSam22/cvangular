import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  constructor(public fb: FormBuilder) {
  }
  /*  -------- personal information ----------*/
  personalData = new FormGroup({
    fullname: new FormControl(""),
    birthDay: new FormControl(""),
    jobtitle: new FormControl(""),
    address: this.fb.array([
      this.fb.control("")
    ])
  })

  get address() {
    return this.personalData.get("address") as FormArray
  }

  addaddress() {
    this.address.push(this.fb.control(""))
  }
  /*  -------- personal information ----------*/

  /*  -------- contact ----------*/

  contact = new FormGroup({
    email: new FormControl("", Validators.required),
    github: new FormControl(""),
    linkedin: new FormControl(""),
    phone: this.fb.array([
      this.fb.control("")
    ])
  })

  get phone() {
    return this.contact.get("phone") as FormArray
  }
  addphone() {
    this.phone.push(this.fb.control(""))
  }


  submit() {
    console.log(this.personalData.value, this.contact.value)
  }
  /*  -------- contacts ----------*/

  /*  -------- start experience ----------*/



  experience = this.fb.group({
    newexp() { },
    details: this.fb.array([
      this.newexp()
    ]),
  })
  details(): FormArray {
    return this.experience.get("details") as FormArray
  }



  newexp(): FormGroup {
    return this.fb.group({
      company: '',
      location: '',
      start: '',
      end: '',
      skills: this.fb.array([
        this.newSkill()
      ])
    })
  }

  addexp() {
    this.details().push(this.newexp());
  }

  removeexp(expindex: number) {
    this.details().removeAt(expindex);
  }

  skills(expindex: number): FormArray {
    return this.details().at(expindex).get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addEmployeeSkill(expindex: number) {
    this.skills(expindex).push(this.newSkill());
  }

  removeEmployeeSkill(expindex: number, skillIndex: number) {
    this.skills(expindex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.experience.value);
  }
  /*  -------- end experience ----------*/


  /*  -------- start education ----------*/

  degrees: any[] = ['Professional Certificate', 'Undergraduate Degrees', 'Bachelor Degree', 'Master Degree','Doctoral Degree'];
  filtervalue:any= ""

  
 education = new FormGroup({
  degree : new FormControl("")
})

  
  autocompletefilter() {
    var filtering = new RegExp(this.filtervalue, 'i');
    return this.degrees.filter(function(el){
      return el.match(filtering)
    })

  }

 


  
  /*  -------- end education ----------*/

}

