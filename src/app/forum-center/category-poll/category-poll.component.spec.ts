import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPollComponent } from './category-poll.component';

describe('CategoryPollComponent', () => {
  let component: CategoryPollComponent;
  let fixture: ComponentFixture<CategoryPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
