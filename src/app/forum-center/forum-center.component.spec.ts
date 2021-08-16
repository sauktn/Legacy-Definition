import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCenterComponent } from './forum-center.component';

describe('ForumCenterComponent', () => {
  let component: ForumCenterComponent;
  let fixture: ComponentFixture<ForumCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
