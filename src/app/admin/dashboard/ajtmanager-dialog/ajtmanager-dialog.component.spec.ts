import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtmanagerDialogComponent } from './ajtmanager-dialog.component';

describe('AjtmanagerDialogComponent', () => {
  let component: AjtmanagerDialogComponent;
  let fixture: ComponentFixture<AjtmanagerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjtmanagerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjtmanagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
