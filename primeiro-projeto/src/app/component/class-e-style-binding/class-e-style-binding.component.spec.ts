import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEStyleBindingComponent } from './class-e-style-binding.component';

describe('ClassEStyleBindingComponent', () => {
  let component: ClassEStyleBindingComponent;
  let fixture: ComponentFixture<ClassEStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
