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
            state('in', style({
                opacity: 1
            })),
            transition('void => in', [
                style({
                    opacity: 0.5,
                    height: '80px'
                }),
                animate('500ms ease-in')
            ]),
            transition('in => void', [
                animate(500, style({
                    opacity: 1,
                    height: '30px'
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