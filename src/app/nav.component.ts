import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent {
    isInUse: boolean = false;

    constructor(private router: ActivatedRoute){}

    routerActive(){
        this.isInUse = !this.isInUse;
    }
}