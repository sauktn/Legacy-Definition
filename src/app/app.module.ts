import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ForumCenterComponent } from './forum-center/forum-center.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import {DropdownModule} from "ngx-dropdown";
import { ForumCenterModule } from './forum-center/forum-center.module';
import { ArticleComponent } from './article/article.component';
import { SimpleRedditComponent } from './simple-reddit/simple-reddit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ForumCenterComponent,
        FooterComponent,
        ArticleComponent,
        SimpleRedditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        HeaderModule,
        DropdownModule,
        ForumCenterModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
