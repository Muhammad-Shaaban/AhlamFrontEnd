import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPurchasesComponent } from './add-new-purchases.component';

describe('AddNewPurchasesComponent', () => {
  let component: AddNewPurchasesComponent;
  let fixture: ComponentFixture<AddNewPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
