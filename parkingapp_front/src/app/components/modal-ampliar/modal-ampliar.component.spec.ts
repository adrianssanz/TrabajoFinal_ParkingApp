import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAmpliarComponent } from './modal-ampliar.component';

describe('ModalAmpliarComponent', () => {
  let component: ModalAmpliarComponent;
  let fixture: ComponentFixture<ModalAmpliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAmpliarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAmpliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
