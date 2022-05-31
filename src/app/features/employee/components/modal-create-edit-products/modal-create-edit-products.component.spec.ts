import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditProductsComponent } from './modal-create-edit-products.component';

describe('ModalCreateEditProductsComponent', () => {
  let component: ModalCreateEditProductsComponent;
  let fixture: ComponentFixture<ModalCreateEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateEditProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
