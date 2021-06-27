import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/forms/mainpage/mainpage.component';
import { HomeComponent } from './components/home/home.component';
MainpageComponent

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'main',
    component : MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
