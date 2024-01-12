import { Injectable } from '@angular/core';
import { ImageMetadata } from './image-metadata';

@Injectable({
  providedIn: 'root',
})
export class ImageMetadataProviderService {
  url = 'https://picsum.photos/v2/list'; //todo: make this a configuration when needed

  constructor() {}

  private imageMetaData: ImageMetadata[] | undefined;

  async getAllImageMetadata(): Promise<ImageMetadata[]> {
    if (!this.imageMetaData || this.imageMetaData.length == 0) {
      const data = await fetch(this.url);
      this.imageMetaData = await data.json();
      this.imageMetaData?.forEach((value) => {
        value.isImportant = false;
      });
    }
    return this.imageMetaData ?? [];
  }

  async getImageMetaData(id: string): Promise<ImageMetadata | undefined> {
    const allMetadata = await this.getAllImageMetadata();
    return allMetadata.find((value) => value.id === id);
  }

  async getAllImportantImagesMetadata(): Promise<ImageMetadata[]> {
    const allMetadata = await this.getAllImageMetadata();
    return allMetadata.filter((value) => value.isImportant === true);
  }
}
