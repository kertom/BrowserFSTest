import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
declare var require:any;
import 'rxjs/add/operator/map';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { Directive, Inject, ViewContainerRef,ComponentFactoryResolver }
 from '@angular/core';
import { NavController, NavParams  } from '@ionic/angular';
import { Keyboard } from '@ionic-native/Keyboard/ngx'
import { HTTP } from '@ionic-native/http/ngx';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as fs from 'fs';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  
   constructor() {
   }
  ngOnInit() {
    
    console.log("Filesystem test");
    window["fs"] = fs;
    console.log(fs);

    fs.writeFileSync('/test.txt', 'Cool, I can do this in the browser!');

    fs.readFile('/test.txt', function(err, contents) {
      console.log('bingo ',contents.toString());
    });
  }
  
}
