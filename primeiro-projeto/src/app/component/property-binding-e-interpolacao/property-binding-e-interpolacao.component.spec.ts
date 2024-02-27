import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingEInterpolacaoComponent } from './property-binding-e-interpolacao.component';

describe('PropertyBindingEInterpolacaoComponent', () => {
  let component: PropertyBindingEInterpolacaoComponent;
  let fixture: ComponentFixture<PropertyBindingEInterpolacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingEInterpolacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingEInterpolacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
