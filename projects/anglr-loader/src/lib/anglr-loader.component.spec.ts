import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnglrLoaderComponent } from './anglr-loader.component';

describe('AnglrLoaderComponent', () => {
  let component: AnglrLoaderComponent;
  let fixture: ComponentFixture<AnglrLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnglrLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnglrLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
