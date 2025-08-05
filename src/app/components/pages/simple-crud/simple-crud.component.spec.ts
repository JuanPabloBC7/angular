import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCrudComponent } from './simple-crud.component';

describe('SimpleCrudComponent', () => {
  let component: SimpleCrudComponent;
  let fixture: ComponentFixture<SimpleCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
