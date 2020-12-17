import { FormsModule } from '@angular/forms';
//import { HttpClientJsonpModule } from '@ionic-native/http/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Keyboard } from '@ionic-native/Keyboard/ngx'
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Zip } from '@ionic-native/zip/ngx';
@NgModule({
  declarations: [AppComponent,
    HomeComponent
    ],
  imports: [ 
    //IonAffixModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IOSFilePicker,
    FormsModule, 
    File,
    Keyboard,
    FileTransfer,
    FileOpener,
    BrowserAnimationsModule,
    HttpClient,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    ScreenOrientation,
    BrowserModule,
    HTTP,
    DatePipe,Injectable,
    Zip,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: IonicGestureConfig
        },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    FormsModule,BorderComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ]

})
export class AppModule {

  constructor() {
    
 }

}
