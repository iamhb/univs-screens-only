import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudProfileComponent } from './stud-profile.component';

describe('StudProfileComponent', () => {
  let component: StudProfileComponent;
  let fixture: ComponentFixture<StudProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
