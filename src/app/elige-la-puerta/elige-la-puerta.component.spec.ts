import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligeLaPuertaComponent } from './elige-la-puerta.component';

describe('EligeLaPuertaComponent', () => {
  let component: EligeLaPuertaComponent;
  let fixture: ComponentFixture<EligeLaPuertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligeLaPuertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligeLaPuertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
