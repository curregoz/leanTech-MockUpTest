import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  status: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickEvent(el){

    let element = el.id;

    if( el.classList.contains('active') ){
      el.classList.remove('active');
    }else {
      el.classList.add('active');
    }

    console.log(el.id);

    // let messages;
    // messages = document.getElementById('messages');

    // let wishlist;
    // wishlist = document.getElementById('wishlist');

    // let settings;
    // settings = document.getElementById('settings');

    // let account;
    // account = document.getElementById('account');

    // if ( home.classList.contains('active') ) {
    //   home.classList.remove('active');
    // } else {
    //   home.classList.add('active');
    // }

  }

  changeStatus(){

  }

}
