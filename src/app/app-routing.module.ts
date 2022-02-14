import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/forms/mainpage/mainpage.component';
import { HomeComponent } from './components/home/home.component';
import { CheckdataComponent } from './components/pages/checkdata/checkdata.component';
import { LoginComponent } from './components/signup-login/login/login.component';
import { SimpleComponent } from './components/templates/simple/simple.component';
MainpageComponent

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'main',
    component : MainpageComponent
  },

  {
    path : 'review',
    component : CheckdataComponent
  },
  {
    path : 'template1',
    component : SimpleComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
