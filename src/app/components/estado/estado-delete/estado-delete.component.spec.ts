import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeleteComponent } from './estado-delete.component';

describe('EstadoDeleteComponent', () => {
  let component: EstadoDeleteComponent;
  let fixture: ComponentFixture<EstadoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoDeleteComponent]
    });
    fixture = TestBed.createComponent(EstadoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
