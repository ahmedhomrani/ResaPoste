import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtserviceDialogComponent } from './ajtservice-dialog.component';

describe('AjtserviceDialogComponent', () => {
  let component: AjtserviceDialogComponent;
  let fixture: ComponentFixture<AjtserviceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjtserviceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjtserviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
