import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';

import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';
import { Example8Component } from './example8/example8.component';

const routes: Routes = [
  {path: '', redirectTo: 'example1', pathMatch: 'full'},
  {path: 'example1', component: Example1Component},
  {path: 'example2', component: Example2Component},
  {path: 'example3', component: Example3Component},
  {path: 'example4', component: Example4Component},
  {path: 'example5', component: Example5Component},
  {path: 'example6', component: Example6Component},
  {path: 'example7', component: Example7Component},
  {path: 'example8', component: Example8Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
