import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ForumCenterComponent } from './forum-center/forum-center.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './header/header.module';
import {DropdownModule} from "ngx-dropdown";
import { ForumCenterModule } from './forum-center/forum-center.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ForumCenterComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        HeaderModule,
        DropdownModule,
        ForumCenterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
