import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  public dataname;

  public Name;
  public Destination;
  public Phone;
  public Email;

  constructor(private route: ActivatedRoute, private router: Router, private http: HTTP) { }

  ngOnInit() {

    this.http.setHeader('https://junction.dev.qoco.fi/api/customers', 'x-api-key', 'jmdSHjy6WPaXwoR75E6mJ1ImhxKPRJb51v6DBS0A');
    this.http.get('https://junction.dev.qoco.fi/api/customers', {}, {})
      .then(data => {

        alert(data.status);
        alert(data.data); // data received by server
        alert(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

  }

}
