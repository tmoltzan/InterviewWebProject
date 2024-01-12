import { TestBed } from '@angular/core/testing';

import { ImageMetadataProviderService } from './image-metadata-provider.service';

describe('ImageMetadataProviderService', () => {
  let service: ImageMetadataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageMetadataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
