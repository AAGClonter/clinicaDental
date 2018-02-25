import { Component, OnInit } from '@angular/core';

import { CarouselService } from './carousel.service';
import { Image } from './image.model';

@Component({
    selector: 'app-carousel-container',
    templateUrl: 'carousel-container.component.html',
    styleUrls: ['carousel-container.component.css']
})
export class CarouselComponent implements OnInit {
    images: Image[];

    constructor(private carouselService: CarouselService){}

    ngOnInit(){
        this.getImages();
    }

    getImages(){
        this.carouselService.gettingImages()
                            .subscribe(
                                (images: Image[]) => {
                                    this.images = images;
                                }
                            )
    }
}