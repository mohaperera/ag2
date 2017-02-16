import { Component } from '@angular/core';
import { apiData } from '../app.apidata.service';
@Component({
  //selector: 'contentarea',
  templateUrl: 'app/contentarea/contentarea.html',
})
export class contentareaComponent  { 

constructor (public apiDataService: apiData) {

this.apiDataService.getdata();
}

 }
