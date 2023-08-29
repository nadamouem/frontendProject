import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent  implements OnInit  {

selectItems: any;
    basePath="";
    heroForm!: FormGroup;

    constructor(
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
        this.heroForm = this.fb.group({
            heroId: 'batman',
            agree: null
        });
    }

}

