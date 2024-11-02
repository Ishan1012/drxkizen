import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  searchValue: any[] = [];

  constructor(private giveRoute: Router, private fb: FormBuilder){
  }

  sendSearch()
  {
    this.giveRoute.navigate(['products', { queryParams: {search: this.searchValue}}])
  }

}
