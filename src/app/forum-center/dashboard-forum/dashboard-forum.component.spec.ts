import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardForumComponent } from './dashboard-forum.component';

describe('DashboardForumComponent', () => {
  let component: DashboardForumComponent;
  let fixture: ComponentFixture<DashboardForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
