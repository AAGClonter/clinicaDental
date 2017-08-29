import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Opinion } from './opinion.model';
import { Email } from './email.model';

@Injectable()
export class OpinionService {
    constructor(private http: Http) {}

    sendOpinion(opinion: Opinion, email: Email) {
        const body = JSON.stringify(opinion);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('https://clinica-dental-jane.herokuapp.com/opinion', body, {headers: headers})
                    .map((response: Response) => {
                        const result = response.json();
                        const opinion = new Opinion(
                            result.obj.name,
                            result.obj.lastName,
                            result.obj.email,
                            result.obj.opinion
                        );
                        const email = new Email(
                            result.obj.email,
                            result.obj.opinion
                        );
                        return opinion && email;
                    })
                    .catch((error: Response) => Observable.throw(error.json()));
    }
}