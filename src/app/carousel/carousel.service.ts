import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Image } from './image.model';

@Injectable()
export class CarouselService {

    constructor(private http: Http){}

    gettingImages(): Observable<Image[]>{
        return this.http.get('https://clinica-dental-jane.herokuapp.com/images')
                .map((response: Response) => response.json().obj)
                .catch((error: Response) => Observable.throw(error.json()));
    }
}