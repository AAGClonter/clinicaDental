import { Component, Input } from '@angular/core';
import { Carousel } from './carousel.model';

@Component({
    selector: 'carousel-image',
    template: `
        <img src="{{image.addresse}}" alt="{{image.image}}">
    `
})
export class CarouselImageComponent {
    @Input() image: Carousel;
}