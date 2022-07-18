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
  ngOnInit() {
  }

}
