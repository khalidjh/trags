import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-luggage',
  templateUrl: './luggage.page.html',
  styleUrls: ['./luggage.page.scss'],
})
export class LuggagePage implements OnInit {

  public imgsrc;
  currentImage: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.imgsrc) {
        this.imgsrc = params.imgsrc;
        this.currentImage = 'data:image/jpeg;base64,' + this.imgsrc;
      }
    });
  }

  ngOnInit() {
  }

}
