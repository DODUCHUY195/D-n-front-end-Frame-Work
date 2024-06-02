import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersAdminComponent } from './headers-admin.component';

describe('HeadersAdminComponent', () => {
  let component: HeadersAdminComponent;
  let fixture: ComponentFixture<HeadersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadersAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
