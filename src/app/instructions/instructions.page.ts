import { LuggagePage } from './../luggage/luggage.page';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  constructor(private camera: Camera, private router: Router) { }

  ngOnInit() {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // this.currentImage = 'data:image/jpeg;base64,' + imageData;
      let navigationExtras = {
        queryParams: {
          imgsrc: imageData
        }
      };
      this.router.navigate(['luggage'], navigationExtras);

    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

}
