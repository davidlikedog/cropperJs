import {Component, OnInit} from '@angular/core';
import * as Cropper from '../../node_modules/cropperjs/dist/cropper.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  private cropper = Cropper;

  // constructor(private cropper: Cropper) {
  // }

  // getImgUrl($event) {
  //   // this.cropper.replace(window.URL.createObjectURL($event.path[0].files[0]));
  //   console.log($event);
  // }

  ngOnInit() {
    const image = document.getElementById('image');
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 16,
      dragMode:'move',
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
  }
}



