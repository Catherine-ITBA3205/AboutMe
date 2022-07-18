import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.page.html',
  styleUrls: ['./educational.page.scss'],
})
export class EducationalPage implements OnInit {

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
