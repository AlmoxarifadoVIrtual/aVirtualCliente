import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideTokenComponent } from './valide-token.component';

describe('ValideTokenComponent', () => {
  let component: ValideTokenComponent;
  let fixture: ComponentFixture<ValideTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValideTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
