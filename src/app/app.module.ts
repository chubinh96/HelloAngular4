import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GoodbeyComponent } from './components/goodbey/goodbey.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralComponent } from './components/structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroesComponent,
    GoodbeyComponent,
    TwoWayBindingComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
