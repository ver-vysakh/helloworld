import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ],
  declarations: [FormsComponent]
})
export class MyModuleModule { }
