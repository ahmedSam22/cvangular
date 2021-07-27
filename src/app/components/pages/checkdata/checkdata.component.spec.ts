import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdataComponent } from './checkdata.component';

describe('CheckdataComponent', () => {
  let component: CheckdataComponent;
  let fixture: ComponentFixture<CheckdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
