import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLayoutTestComponent } from './material-layout-test.component';

describe('MaterialLayoutTestComponent', () => {
  let component: MaterialLayoutTestComponent;
  let fixture: ComponentFixture<MaterialLayoutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialLayoutTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialLayoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
