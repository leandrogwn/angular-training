import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulacaoArrayComponent } from './manipulacao-array.component';

describe('ManipulacaoArrayComponent', () => {
  let component: ManipulacaoArrayComponent;
  let fixture: ComponentFixture<ManipulacaoArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulacaoArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulacaoArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
