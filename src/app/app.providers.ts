import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

class CameraMock {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

export class AppProviders {

	public static getProviders() {

		let providers;

		if(document.URL.includes('https://') || document.URL.includes('http://')){

		  // Use browser providers
		  providers = [
		    {provide: Camera, useClass: CameraMock},
		    {provide: ErrorHandler, useClass: IonicErrorHandler}
		  ];

		} else {
		  
		  // Use device providers
		  providers = [
		    Camera,
		    {provide: ErrorHandler, useClass: IonicErrorHandler}
		  ];  

		}

		return providers;

	}

}