import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryActiveComponent } from './category-active.component';

describe('CategoryActiveComponent', () => {
  let component: CategoryActiveComponent;
  let fixture: ComponentFixture<CategoryActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
