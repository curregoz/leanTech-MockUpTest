import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  rangeValue: number = 0;
  checkValue: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
