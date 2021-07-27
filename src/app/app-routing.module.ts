import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/forms/mainpage/mainpage.component';
import { HomeComponent } from './components/home/home.component';
import { CheckdataComponent } from './components/pages/checkdata/checkdata.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
