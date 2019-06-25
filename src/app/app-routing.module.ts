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
import { Example9Component } from './example9/example9.component';
import { Example10Component } from './example10/example10.component';
import { Example11Component } from './example11/example11.component';
import { Example12Component } from './example12/example12.component';
import { AlloComponent } from './allo/allo.component';

const routes: Routes = [
  {path: '', redirectTo: 'example1', pathMatch: 'full'},
  {path: 'example1', component: Example1Component},
  {path: 'example2', component: Example2Component},
  {path: 'example3', component: Example3Component},
  {path: 'example4', component: Example4Component},
  {path: 'example5', component: Example5Component},
  {path: 'example6', component: Example6Component},
  {path: 'example7', component: Example7Component},
  { path: 'example8', component: Example8Component },
  { path: 'example9', component: Example9Component },
  { path: 'example10', component: Example10Component },
  { path: 'example11', component: Example11Component },
  { path: 'example12', component: Example12Component },
  { path: 'allo', component: AlloComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
