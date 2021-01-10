import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { PathfinderComponent } from './pathfinder/pathfinder.component';
import { AlgorithmDescriptionComponent } from './algorithm-description/algorithm-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    PathfinderComponent,
    AlgorithmDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
