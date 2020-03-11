import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Info} from './models/info';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
 infoArray: Info[]=[
 {id: 1, nombre: "Josh", cedula:"1.126.126"},
 {id: 1, nombre: "Maria", cedula:"2.116.556"},
 {id: 1, nombre: "Fred", cedula:"365.400"},
 ];

}
