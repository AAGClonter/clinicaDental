import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OpinionService } from './opinion.service';
import { Opinion } from './opinion.model';
import { Email } from './email.model';

@Component({
    selector: 'app-opinion',
    templateUrl: 'opinion.component.html',
    styleUrls: ['opinion.component.css']
})
export class OpinionComponent {
    opinion: Opinion;

    constructor(private opinionService: OpinionService) {}

    onSubmit(form: NgForm){
        const opinion = new Opinion(
            form.value.name,
            form.value.lastName,
            form.value.email,
            form.value.opinion
        );
        const email = new Email(
            form.value.email,
            form.value.opinion
        );
        this.opinionService.sendOpinion(opinion, email)
                    .subscribe(
                        data => console.log(data),
                        error => console.error(error)
                    );

    }
    
}