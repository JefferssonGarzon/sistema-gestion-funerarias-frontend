import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditNewsComponent } from './modal-create-edit-news.component';

describe('ModalCreateEditNewsComponent', () => {
  let component: ModalCreateEditNewsComponent;
  let fixture: ComponentFixture<ModalCreateEditNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateEditNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateEditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
