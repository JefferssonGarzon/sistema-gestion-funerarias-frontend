import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditBurialServicesComponent } from './modal-create-edit-burial-services.component';

describe('ModalCreateEditBuildServicesComponent', () => {
  let component: ModalCreateEditBurialServicesComponent;
  let fixture: ComponentFixture<ModalCreateEditBurialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateEditBurialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateEditBurialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
