import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContainerComponent } from './image-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageContainerComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageContainerComponent);
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
