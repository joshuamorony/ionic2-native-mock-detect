import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, camera: Camera) {

    platform.ready().then(() => {

      // Launch camera
      camera.getPicture().then((imageData) => {
        console.log(imageData);
      }, (err) => {
        console.log(err);
      });      

    });

  }
}
