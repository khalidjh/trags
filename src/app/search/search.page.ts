import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  findFlight() {
    let navigationExtras = {
      queryParams: {
        name: name
      }
    };
    this.router.navigate(['confirm'], navigationExtras);
  }

}
