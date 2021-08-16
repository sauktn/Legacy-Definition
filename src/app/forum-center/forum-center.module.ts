import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardForumComponent } from './dashboard-forum/dashboard-forum.component';
import { CategoryForumComponent } from './category-forum/category-forum.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryPollComponent } from './category-poll/category-poll.component';
import { CategoryActiveComponent } from './category-active/category-active.component';

@NgModule({
    imports: [CommonModule],
    exports: [DashboardForumComponent, CategoryForumComponent, TaskCardComponent, PageDashboardComponent],
    declarations: [DashboardForumComponent, CategoryForumComponent, TaskCardComponent, PageDashboardComponent, CategoryListComponent, CategoryPollComponent, CategoryActiveComponent],
    providers: [],
})
export class ForumCenterModule {}
