import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketNuevoComponent } from './ticket-nuevo.component';



describe('TicketNuevoComponent', () => {
  let component: TicketNuevoComponent;
  let fixture: ComponentFixture<TicketNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketNuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
