import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderModalComponent } from './service-provider-modal.component';

describe('ServiceProviderModalComponent', () => {
  let component: ServiceProviderModalComponent;
  let fixture: ComponentFixture<ServiceProviderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
