import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SplitioService} from "./splitio.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioDialogComponent } from './audio-dialog/audio-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AudioDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    SplitioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
