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

  public events = [
    {
      "baggageId": "78696b39-e03b-49b0-be09-bdb8f89af67d",
      "dot": "green",
      "eventId": "7fcec660-175b-48db-a505-383163e188c7",
      "type": "Baggage registered at the check-in counter",
      "airport": "HEL",
      "timestamp": "2019-11-15T02:04:23.318Z"
    },
    {
      "baggageId": "78696b39-e03b-49b0-be09-bdb8f89af67d",
      "dot": "green",
      "eventId": "eed8e8cc-7e37-4afa-98d1-0f94df0f5024",
      "type": "Baggage loaded on to the aircraft",
      "airport": "HEL",
      "timestamp": "2019-11-15T02:15:36.885Z"
    },
    {
      "baggageId": "78696b39-e03b-49b0-be09-bdb8f89af67d",
      "dot": "green",
      "eventId": "366f6261-2628-43b4-b9d2-a6568a064bcb",
      "type": "Baggage loaded off the aircraft",
      "airport": "LAX",
      "timestamp": "2019-11-15T14:38:36.983Z"
    },
    {
      "baggageId": "78696b39-e03b-49b0-be09-bdb8f89af67d",
      "dot": "grey",
      "eventId": "366f6261-2628-43b4-b9d2-a6568a064bcb",
      "type": "READY FOR CLAIM (Track 05)",
      "airport": "LAX",
      "timestamp": "2019-11-16T14:38:36.983Z"
    }
    // {
    //   "baggageId": "78696b39-e03b-49b0-be09-bdb8f89af67d",
    //   "eventId": "4f60827b-f411-4876-8159-3a0c62ed6a4c",
    //   "type": "CLAIMED",
    //   "airport": "LAX",
    //   "timestamp": "2019-11-15T15:37:38.590Z"
    // }
  ];

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
