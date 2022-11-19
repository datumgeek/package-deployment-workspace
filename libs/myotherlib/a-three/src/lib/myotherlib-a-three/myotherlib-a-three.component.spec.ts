import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyotherlibAThreeComponent } from './myotherlib-a-three.component';

describe('MyotherlibAThreeComponent', () => {
  let component: MyotherlibAThreeComponent;
  let fixture: ComponentFixture<MyotherlibAThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyotherlibAThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyotherlibAThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
