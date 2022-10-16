import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterresvationComponent } from './consulterresvation.component';

describe('ConsulterresvationComponent', () => {
  let component: ConsulterresvationComponent;
  let fixture: ComponentFixture<ConsulterresvationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterresvationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterresvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
