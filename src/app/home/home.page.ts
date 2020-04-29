import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos: any;
  
  constructor( private photoService: PhotosService ) {}

  ngOnInit() {
    this.photos = this.photoService.getPhotos();
  }

}
