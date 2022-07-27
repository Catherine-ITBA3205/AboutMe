import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.page.html',
  styleUrls: ['./personalinfo.page.scss'],
})
export class PersonalinfoPage implements OnInit {

  constructor() { }
  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','Light');
    }
  }
  name= 'Catherine D. Beredo';
  age= '21';
  birthday= 'February 06, 2001';
  address= 'San Juan, Batangas';
  contact= '09091982017';
  email= 'catherine.beredo@g.batstate-u.edu.ph';
  nationality= 'Filipino';
  ngOnInit() {
  }

}
