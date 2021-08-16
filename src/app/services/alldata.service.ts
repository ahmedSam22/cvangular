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
    fullname: new FormControl("", [Validators.required,
    Validators.minLength(5),
    ]),
    birthDay: new FormControl(""),
    jobtitle: new FormControl("", [Validators.required,
    Validators.minLength(3),
    ]),
    address: this.fb.array([
      this.fb.control("", [Validators.required,
      Validators.minLength(5),
      ])
    ])
  })

  get address() {
    return this.personalData.get("address") as FormArray
  }

  addaddress() {
    this.address.push(this.fb.control("", [Validators.required,
    Validators.minLength(5),
    ]))
  }
  /*  -------- personal information ----------*/

  /*  -------- contact ----------*/

  contact = new FormGroup({
    email: new FormControl("", [Validators.required,
    Validators.email]),
    github: new FormControl(""),
    linkedin: new FormControl(""),
    phone: this.fb.array([
      this.fb.control("", [Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(11),

      ])
    ])
  })

  get phone() {
    return this.contact.get("phone") as FormArray
  }
  addphone() {
    this.phone.push(this.fb.control("", [Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.minLength(11),

    ]))
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
      company: new FormControl("", [Validators.required,
      Validators.minLength(5),
      ]),
      location: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
      start: new FormControl(""),
      end: new FormControl(""),
      descriptions: this.fb.array([
        this.newdescription()
      ])
    })
  }

  addexp() {
    this.details().push(this.newexp());
  }

  removeexp(expindex: number) {
    this.details().removeAt(expindex);
  }

  descriptions(expindex: number): FormArray {
    return this.details().at(expindex).get("descriptions") as FormArray
  }

  newdescription(): FormGroup {
    return this.fb.group({
      description: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
    })
  }

  addEmployeedescription(expindex: number) {
    this.descriptions(expindex).push(this.newdescription());
  }

  removeEmployeedescription(expindex: number, descriptionIndex: number) {
    this.descriptions(expindex).removeAt(descriptionIndex);
  }

  onSubmit() {
    console.log(this.experience.value.details);
  }
  /*  -------- end experience ----------*/


  /*  -------- start education ----------*/

  degrees: any[] = ['Professional Certificate', 'Undergraduate Degrees', 'Bachelor Degree', 'Master Degree', 'Doctoral Degree'];
  filtervalue: any = ""

  // education need to update

  education = this.fb.group({
    newschool() { },
    schools: this.fb.array([
      this.newschool()
    ]),
  })
  schools(): FormArray {
    return this.education.get("schools") as FormArray
  }

  newschool(): FormGroup {
    return this.fb.group({
      schoolname: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
      city: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
      degree: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
      field: new FormControl("", [Validators.required,
        Validators.minLength(5),
        ]),
      start: new FormControl(""),
      end: new FormControl(""),
    })
  }
  addschool() {
    this.schools().push(this.newschool());
  }
  educationsubmit() {
    console.log(this.education.value.schools);

  }
  autocompletefilter() {
    var filtering = new RegExp(this.filtervalue, 'i');
    return this.degrees.filter(function (el) {
      return el.match(filtering)
    })

  }

  /*  -------- end education ----------*/





  /*  -------- start skills ----------*/



  skills = this.fb.group({
    skill: this.fb.array([
      this.fb.control("")
    ])

  })

  get skill() {
    return this.skills.get("skill") as FormArray
  }


  addSkills() {
    this.skill.push(this.fb.control(""))
  }
  removeSkill(skillindex: number) {
    this.skill.removeAt(skillindex);
  }

  /*  -------- end skills ----------*/




  /*  -------- start courses & hoppies ----------*/

  courses = this.fb.group({
    course: this.fb.array([
      this.fb.control("", [Validators.required,
        Validators.minLength(5),
        ])
    ])

  })

  get course() {
    return this.courses.get("course") as FormArray
  }


  addCourse() {
    this.course.push(this.fb.control("", [Validators.required,
      Validators.minLength(5),
      ]))
  }
  removeCourse(courseIndex: number) {
    this.course.removeAt(courseIndex);
  }



  hoppies = this.fb.group({
    hoppy: this.fb.array([
      this.fb.control("", [Validators.required,
        Validators.minLength(5),
        ])
    ])

  })

  get hoppy() {
    return this.hoppies.get("hoppy") as FormArray
  }


  addHoppy() {
    this.hoppy.push(this.fb.control("", [Validators.required,
      Validators.minLength(5),
      ]))
  }
  removeHoppy(hoppyindex: number) {
    this.hoppy.removeAt(hoppyindex);
  }




  /*  -------- end courses & hoppies ----------*/


  /*  -------- end projects ----------*/

  projects = this.fb.group({
    project: this.fb.array([
      this.fb.control("", [Validators.required,
        Validators.minLength(5),
        ])
    ])

  })
  Projectsection: boolean = false;

  get project() {
    return this.projects.get("project") as FormArray
  }


  addProject() {
    this.project.push(this.fb.control("", [Validators.required,
      Validators.minLength(5),
      ]))
  }
  removeProject(projectindex: number) {
    this.project.removeAt(projectindex);
  }


  /*  -------- end projects ----------*/




}

