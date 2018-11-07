import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStructComponent } from './page-struct.component';

describe('PageStructComponent', () => {
  let component: PageStructComponent;
  let fixture: ComponentFixture<PageStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
