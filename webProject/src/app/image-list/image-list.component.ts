import { Component, inject } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { CommonModule } from '@angular/common';
import { ImageMetadata } from '../image-metadata';
import { ImageMetadataProviderService } from '../image-metadata-provider.service';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, ImageContainerComponent],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent {
  imagesMetadata: ImageMetadata[] = [];
  imageMetaDataService: ImageMetadataProviderService = inject(
    ImageMetadataProviderService
  );

  constructor() {
    this.imageMetaDataService
      .getAllImageMetaData()
      .then((imagesMetaData: any) => {
        this.imagesMetadata = imagesMetaData;
      });
    // This is the pattern used in tutorials on angular.io, but I have my reservations.
    // Having async code that is not awaited just seems like a code smell, especially in a constructor.
    // I tend to have an initializer in ts classes that is async.
    // In general this type of code is hard to unit test and can lead to weird bugs that are hard to track down.
    // Maybe being in a component it is an exeption to my rules, but I would want to research more before I put this into production code.
  }
}
