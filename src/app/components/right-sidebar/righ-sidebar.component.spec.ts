import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighSidebarComponent } from './righ-sidebar.component';

describe('RighSidebarComponent', () => {
  let component: RighSidebarComponent;
  let fixture: ComponentFixture<RighSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RighSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RighSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
