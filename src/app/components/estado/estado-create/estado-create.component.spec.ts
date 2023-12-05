import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCreateComponent } from './estado-create.component';

describe('EstadoCreateComponent', () => {
  let component: EstadoCreateComponent;
  let fixture: ComponentFixture<EstadoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoCreateComponent]
    });
    fixture = TestBed.createComponent(EstadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
