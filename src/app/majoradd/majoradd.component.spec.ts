import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajoraddComponent } from './majoradd.component';

describe('MajoraddComponent', () => {
  let component: MajoraddComponent;
  let fixture: ComponentFixture<MajoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
