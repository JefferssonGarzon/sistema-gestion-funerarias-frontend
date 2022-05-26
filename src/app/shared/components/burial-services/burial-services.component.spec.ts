import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialServicesComponent } from './burial-services.component';

describe('BurialServicesComponent', () => {
  let component: BurialServicesComponent;
  let fixture: ComponentFixture<BurialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
