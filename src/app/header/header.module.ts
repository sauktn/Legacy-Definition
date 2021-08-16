
import { NgModule } from '@angular/core';
import { SliderHeaderComponent } from './slider-header/slider-header.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
      ],
      exports: [
        SliderHeaderComponent,
        SearchHeaderComponent
      ],
      declarations: [
        SliderHeaderComponent,
        SearchHeaderComponent
      ],
      providers: [],
  })
export class HeaderModule {}
