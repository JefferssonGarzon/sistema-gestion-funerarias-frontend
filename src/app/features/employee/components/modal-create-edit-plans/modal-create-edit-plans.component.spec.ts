import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditPlansComponent } from './modal-create-edit-plans.component';

describe('ModalCreateEditPlansComponent', () => {
  let component: ModalCreateEditPlansComponent;
  let fixture: ComponentFixture<ModalCreateEditPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateEditPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateEditPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
