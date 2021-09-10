import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpQueueModalComponent } from './sp-queue-modal.component';

describe('SpQueueModalComponent', () => {
  let component: SpQueueModalComponent;
  let fixture: ComponentFixture<SpQueueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpQueueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpQueueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
