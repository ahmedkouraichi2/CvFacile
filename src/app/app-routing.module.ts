import { VoirTousComponent } from './voir-tous/voir-tous.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilComponent } from './conseil/conseil.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"Conseil",component:ConseilComponent},
  {path:"home2",component:Home2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
