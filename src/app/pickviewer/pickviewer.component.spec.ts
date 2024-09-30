import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickviewerComponent } from './pickviewer.component';

describe('PickviewerComponent', () => {
  let component: PickviewerComponent;
  let fixture: ComponentFixture<PickviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
