import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation.component';
import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MaterialModule
  ]
})
export class NavigationModule { }
