import { Component } from '@angular/core';
import {
    trigger,
    state, 
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-especialidades',
    templateUrl: 'especialidades.component.html',
    styleUrls: ['especialidades.component.css'],
    animations: [
        trigger('especialidadesState', [
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }),
                animate('500ms ease-in')
            ]),
            transition(':leave', [
                style({
                    opacity: 1,
                    transform: 'translateY(0)'
                }),
                animate(1000, style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class EspecialidadesComponent {
    state = 'void';
    isActive: boolean = false;
    isActiveSecond: boolean = false;
    isActiveThird: boolean = false;
    isActiveFourth: boolean = false;
    isActiveFifth: boolean = false;
    isActiveSixth: boolean = false;

    toggleState() {
        this.state == 'void' ? this.state = 'in' : this.state = 'void';
    }

    onActive(){
        this.isActive = !this.isActive;
        this.toggleState();
    }

    onActiveSecond(){
        this.isActiveSecond = !this.isActiveSecond;
    }

    onActiveThird(){
        this.isActiveThird = !this.isActiveThird;
    }

    onActiveFourth(){
        this.isActiveFourth = !this.isActiveFourth;
    }

    onActiveFifth(){
        this.isActiveFifth = !this.isActiveFifth;
    }

    onActiveSixth(){
        this.isActiveSixth = !this.isActiveSixth;
    }

    getHeight(){
        if (!this.isActive) {
            return '80px';
        }
    }

     getHeightSecond(){
        if (!this.isActiveSecond) {
            return '80px';
        }
    }

     getHeightThird(){
        if (!this.isActiveThird) {
            return '80px';
        }
    }

     getHeightFourth(){
        if (!this.isActiveFourth) {
            return '80px';
        }
    }

     getHeightFifth(){
        if (!this.isActiveFifth) {
            return '80px';
        }
    }

     getHeightSixth(){
        if (!this.isActiveSixth) {
            return '80px';
        }
    }
}