import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmVentaComponent } from './tm-venta.component';

describe('TmVentaComponent', () => {
  let component: TmVentaComponent;
  let fixture: ComponentFixture<TmVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
