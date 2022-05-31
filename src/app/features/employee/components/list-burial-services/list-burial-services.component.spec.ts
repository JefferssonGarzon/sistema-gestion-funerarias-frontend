import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBurialServicesComponent } from './list-burial-services.component';

describe('ListBurialServicesComponent', () => {
  let component: ListBurialServicesComponent;
  let fixture: ComponentFixture<ListBurialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBurialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBurialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
