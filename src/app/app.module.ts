import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { ButtonComponent } from './button/button.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';
import { Example8Component } from './example8/example8.component';
import { AlloComponent } from './allo/allo.component';
import { Example9Component } from './example9/example9.component';
import { Example10Component } from './example10/example10.component';
import { Example11Component } from './example11/example11.component';
import { Example12Component } from './example12/example12.component';
import { ReusableExampleComponent } from './reusable-example/reusable-example.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    ButtonComponent,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8Component,
    AlloComponent,
    Example9Component,
    Example10Component,
    Example11Component,
    Example12Component,
    ReusableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
