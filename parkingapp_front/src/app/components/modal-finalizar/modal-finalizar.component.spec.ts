import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFinalizarComponent } from './modal-finalizar.component';

describe('ModalFinalizarComponent', () => {
  let component: ModalFinalizarComponent;
  let fixture: ComponentFixture<ModalFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFinalizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
