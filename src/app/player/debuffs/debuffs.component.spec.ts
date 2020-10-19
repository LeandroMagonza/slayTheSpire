import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuffsComponent } from './debuffs.component';

describe('DebuffsComponent', () => {
  let component: DebuffsComponent;
  let fixture: ComponentFixture<DebuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebuffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
