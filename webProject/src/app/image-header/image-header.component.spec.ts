import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHeaderComponent } from './image-header.component';

describe('ImageHeaderComponent', () => {
  let component: ImageHeaderComponent;
  let fixture: ComponentFixture<ImageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageHeaderComponent);
    component = fixture.componentInstance;
    component.imageMetadata = {
      id: '222',
      author: 'foo',
      isImportant: true,
      url: '',
      download_url: '',
      width: '250',
      height: '250',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
