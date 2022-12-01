import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElemComponent } from './create-elem.component';

describe('CreateElemComponent', () => {
  let component: CreateElemComponent;
  let fixture: ComponentFixture<CreateElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
