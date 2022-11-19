import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibAOneComponent } from './mylib-a-one.component';

describe('MylibAOneComponent', () => {
  let component: MylibAOneComponent;
  let fixture: ComponentFixture<MylibAOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MylibAOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MylibAOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
