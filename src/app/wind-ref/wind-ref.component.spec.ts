import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindRefComponent } from './wind-ref.component';

describe('WindRefComponent', () => {
  let component: WindRefComponent;
  let fixture: ComponentFixture<WindRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
