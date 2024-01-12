import { Component, inject } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { CommonModule } from '@angular/common';
import { ImageMetadata } from '../image-metadata';
import { ImageMetadataProviderService } from '../image-metadata-provider.service';
import { FilterValueServiceService } from '../filter-value-service.service';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, ImageContainerComponent, FormsModule],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent {
  imagesMetadata: ImageMetadata[] = [];
  onlyShowImportant: boolean = false;
  authorName: String = '';
  imageMetadataService: ImageMetadataProviderService = inject(
    ImageMetadataProviderService
  );
  filterValueService: FilterValueServiceService = inject(
    FilterValueServiceService
  );

  constructor() {
    this.onlyShowImportant = this.filterValueService.getIsImportant();
    this.authorName = this.filterValueService.getAuthorName();
    this.applyFilters();

    //this.showAllImages();
    // This is the pattern used in tutorials on angular.io, but I have my reservations.
    // Having async code that is not awaited just seems like a code smell, especially in a constructor.
    // I tend to have an initializer in ts classes that is async.
    // In general this type of code is hard to unit test and can lead to weird bugs that are hard to track down.
    // Maybe being in a component it is an exeption to my rules, but I would want to research more before I put this into production code.
  }

  public applyFilters(): void {
    this.filterValueService.setAuthorName(this.authorName);
    this.filterValueService.setIsImportant(this.onlyShowImportant);

    this.imageMetadataService
      .getFilteredImageMetadata(this.onlyShowImportant, this.authorName)
      .then((imagesMetaData: any) => {
        this.imagesMetadata = imagesMetaData;
      });
  }
}
