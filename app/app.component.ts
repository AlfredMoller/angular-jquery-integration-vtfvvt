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
 {id: 2, nombre: "Maria", cedula:"2.116.556"},
 {id: 3, nombre: "Fred", cedula:"365.400"},
 ];
/*Creamos una variable de tipo type scrip para añadir atravez de la caja*/ 
selecInfo: Info= new Info();

abrirEditar(info:Info){
this.selecInfo = info
}

AgEditar(){
  if(this.selecInfo.id === 0){
  this.selecInfo.id= this.infoArray.length + 1
  this.infoArray.push(this.selecInfo)
  }  

  this.selecInfo= new Info()
}

Eliminar(){
  this.infoArray= this.infoArray.filter(x=> x !=this.selecInfo)
  this.selecInfo= new Info()
}

}
