import { Component, OnInit } from '@angular/core';

import { CarouselService } from './carousel.service';
import { Carousel } from './carousel.model';

@Component({
    selector: 'app-carousel-container',
    templateUrl: 'carousel-container.component.html',
    styleUrls: ['carousel-container.component.css']
})
export class CarouselComponent implements OnInit {
    images: Carousel[];

    constructor(private carouselService: CarouselService) {}

    ngOnInit(){
        this.getImages();
    }

    getImages(){
        this.carouselService.gettingImages()
                            .subscribe(
                                data => this.images = data
                            )
    }
}