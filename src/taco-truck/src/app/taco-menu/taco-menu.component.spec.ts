import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoMenuComponent } from './taco-menu.component';

describe('TacoMenuComponent', () => {
  let component: TacoMenuComponent;
  let fixture: ComponentFixture<TacoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
