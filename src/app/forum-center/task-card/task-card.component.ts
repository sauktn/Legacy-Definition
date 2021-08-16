import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/model/people.model';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
    @Input() people: People;
    constructor() {}

    ngOnInit(): void {
        console.log(this.people);
    }
}
