import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/forms/personal/personal.component';
import { ContactComponent } from './components/forms/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials/materials.module';
import { MainpageComponent } from './components/forms/mainpage/mainpage.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { ExperienceComponent } from './components/forms/experience/experience.component';
import { EducationComponent } from './components/forms/education/education.component';
import { SkillsComponent } from './components/forms/skills/skills.component';
import { CoursesComponent } from './components/forms/courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    ContactComponent,
    MainpageComponent,
    NavbarComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CoursesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,MaterialsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
