import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationaccountComponent } from './creationaccount.component';

describe('CreationaccountComponent', () => {
  let component: CreationaccountComponent;
  let fixture: ComponentFixture<CreationaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
