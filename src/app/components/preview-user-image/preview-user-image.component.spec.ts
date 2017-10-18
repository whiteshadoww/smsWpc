import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUserImageComponent } from './preview-user-image.component';

describe('PreviewUserImageComponent', () => {
  let component: PreviewUserImageComponent;
  let fixture: ComponentFixture<PreviewUserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewUserImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewUserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
