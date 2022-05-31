import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBurialServicesComponent } from './my-burial-services.component';

describe('MyBurialServicesComponent', () => {
  let component: MyBurialServicesComponent;
  let fixture: ComponentFixture<MyBurialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBurialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBurialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
