import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessResourceComponent } from './access-resource.component';

describe('AccessResourceComponent', () => {
  let component: AccessResourceComponent;
  let fixture: ComponentFixture<AccessResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
