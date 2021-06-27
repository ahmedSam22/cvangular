import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    })
    
    writer
      .type('Creative')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(8)
      .type('great')
      .rest(500)
      .remove(5)
      .type('detailed')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('best')
      .rest(500)
      .clear()
      .start()
          
   
    
  }

  
}
