import { LuggagePage } from './../luggage/luggage.page';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  public loading;

  constructor(private camera: Camera, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 2000
    });
    this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
  }
 
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.presentLoading();

    this.camera.getPicture(options).then((imageData) => {
      // this.currentImage = 'data:image/jpeg;base64,' + imageData;
      let navigationExtras = {
        queryParams: {
          imgsrc: imageData
        }
      };
      this.dismissLoading();
      this.router.navigate(['luggage'], navigationExtras);
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

}
