import { Component, inject } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { CommonModule } from '@angular/common';
import { ImageMetadata } from '../image-metadata';
import { ImageMetadataProviderService } from '../image-metadata-provider.service';
import { FilterValueServiceService } from '../filter-value-service.service';
import { FormsModule } from '@angular/forms';
import { PaginationService } from '../pagination.service';

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
  notHasPrev: boolean = true;
  notHasNext: boolean = true;

  imageMetadataService: ImageMetadataProviderService = inject(
    ImageMetadataProviderService
  );
  filterValueService: FilterValueServiceService = inject(
    FilterValueServiceService
  );
  paginationService: PaginationService = inject(PaginationService);

  constructor() {
    this.onlyShowImportant = this.filterValueService.getIsImportant();
    this.authorName = this.filterValueService.getAuthorName();
    this.applyFilters();
  }

  public onNextClick(): void {
    this.paginationService.page++;
    this.applyFilters();
  }

  public onPrevClick(): void {
    this.paginationService.page--;
    this.applyFilters();
  }

  public applyFilters(): void {
    this.filterValueService.setAuthorName(this.authorName);
    this.filterValueService.setIsImportant(this.onlyShowImportant);

    this.imageMetadataService
      .getFilteredImageMetadata(this.onlyShowImportant, this.authorName)
      .then((imagesMetaData: any) => {
        this.imagesMetadata = imagesMetaData;
        this.notHasNext = !this.paginationService.hasNext;
        this.notHasPrev = !this.paginationService.hasPrev;
      });
  }
}
