import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersAdminComponent } from './footers-admin.component';

describe('FootersAdminComponent', () => {
  let component: FootersAdminComponent;
  let fixture: ComponentFixture<FootersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootersAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
