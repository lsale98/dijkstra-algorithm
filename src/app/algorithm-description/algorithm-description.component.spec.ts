import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDescriptionComponent } from './algorithm-description.component';

describe('AlgorithmDescriptionComponent', () => {
  let component: AlgorithmDescriptionComponent;
  let fixture: ComponentFixture<AlgorithmDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
