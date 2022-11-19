import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibATwoComponent } from './mylib-a-two.component';

describe('MylibATwoComponent', () => {
  let component: MylibATwoComponent;
  let fixture: ComponentFixture<MylibATwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MylibATwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MylibATwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
