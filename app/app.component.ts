import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Jquery Integration With Angular!';
  isJqueryWorking: string

  ngOnInit()
  {
    $(document).ready(() => {
        this.isJqueryWorking = 'Jquery is working !!!';
    });
  }
}
