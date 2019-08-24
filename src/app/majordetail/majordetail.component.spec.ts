import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajordetailComponent } from './majordetail.component';

describe('MajordetailComponent', () => {
  let component: MajordetailComponent;
  let fixture: ComponentFixture<MajordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
