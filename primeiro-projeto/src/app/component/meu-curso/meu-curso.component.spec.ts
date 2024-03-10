import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCursoComponent } from './meu-curso.component';

describe('MeuCursoComponent', () => {
  let component: MeuCursoComponent;
  let fixture: ComponentFixture<MeuCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
