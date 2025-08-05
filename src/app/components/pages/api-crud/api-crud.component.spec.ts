import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCrudComponent } from './api-crud.component';

describe('ApiCrudComponent', () => {
  let component: ApiCrudComponent;
  let fixture: ComponentFixture<ApiCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
