import { Injectable, inject } from '@angular/core';
import { ImageMetadata } from './image-metadata';
import { PaginationService } from './pagination.service';
import { Links, parseLinkHeader } from '@web3-storage/parse-link-header';
import { PageMetadata } from './page-metadata';
@Injectable({
  providedIn: 'root',
})
export class ImageMetadataProviderService {
  constructor() {}

  private paginationService: PaginationService = inject(PaginationService);
  private knownImageMetadata: ImageMetadata[] = [];
  private pagesMetadata: PageMetadata[] = [];

  public async getPagedImageMetadata(): Promise<ImageMetadata[]> {
    let pageNumber = this.paginationService.page;
    let existingPageMetadata = this.pagesMetadata.find(
      (m) => m.pageNumber === pageNumber
    );
    if (existingPageMetadata != undefined) {
      this.paginationService.hasPrev = existingPageMetadata.hasPrev;
      this.paginationService.hasNext = existingPageMetadata.hasNext;
      return this.knownImageMetadata.filter((metadata) => {
        let intId: number = parseInt(metadata.id);
        return (
          existingPageMetadata &&
          intId >= existingPageMetadata.startId &&
          intId <= existingPageMetadata.endId
        );
      });
    }

    let url = 'https://picsum.photos/v2/list?page=' + pageNumber + '&limit=50';

    const data = await fetch(url);

    const linkHeader = data.headers.get('Link');
    const links: Links | null = parseLinkHeader(linkHeader);

    if (links) {
      this.paginationService.hasNext =
        links['next'] !== null && links['next'] !== undefined;
      this.paginationService.hasPrev =
        links['prev'] !== null && links['prev'] !== undefined;
    }

    let imageMetaData = (await data.json()) as ImageMetadata[];

    imageMetaData?.forEach((value: ImageMetadata) => {
      value.isImportant = false; //todo: persist the isImportant property into an indexed db
      this.knownImageMetadata.push(value);
    });

    let newPageMetadata: PageMetadata = {
      pageNumber: pageNumber,
      startId: parseInt(imageMetaData[0].id),
      endId: parseInt(imageMetaData[imageMetaData.length - 1].id),
      hasPrev: this.paginationService.hasPrev,
      hasNext: this.paginationService.hasNext,
    };
    this.pagesMetadata.push(newPageMetadata);

    return imageMetaData ?? [];
  }

  public async getImageMetaData(
    id: string
  ): Promise<ImageMetadata | undefined> {
    const allMetadata = await this.getPagedImageMetadata();
    return allMetadata.find((value) => value.id === id);
  }

  private async getAllImportantImagesMetadata(): Promise<ImageMetadata[]> {
    const allMetadata = this.knownImageMetadata;
    return allMetadata.filter((value) => value.isImportant === true);
  }

  async getFilteredImageMetadata(isImportant: boolean, authorName: String) {
    if (!isImportant && authorName.trim().length === 0) {
      return this.getPagedImageMetadata();
    }

    let candidates: ImageMetadata[] = [];
    if (isImportant) {
      candidates = await this.getAllImportantImagesMetadata();
      this.paginationService.hasPrev = false;
      this.paginationService.hasNext = false;
    } else {
      candidates = this.knownImageMetadata;
    }

    if (authorName.trim().length > 0) {
      this.paginationService.hasPrev = false;
      this.paginationService.hasNext = false;
      return candidates.filter(
        (value) =>
          value.author.toLowerCase().indexOf(authorName.trim().toLowerCase()) >
          -1
      );
    }

    return candidates;
  }
}
