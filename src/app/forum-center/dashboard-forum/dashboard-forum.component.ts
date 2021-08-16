import { Component, OnInit } from '@angular/core';
import { PEOPLEs } from 'src/app/model/mock-people';

@Component({
    selector: 'app-dashboard-forum',
    templateUrl: './dashboard-forum.component.html',
    styleUrls: ['./dashboard-forum.component.scss'],
})
export class DashboardForumComponent implements OnInit {
    listPeople = [];

    constructor() {}

    ngOnInit(): void {
        this.listPeople = PEOPLEs;
    }
}
