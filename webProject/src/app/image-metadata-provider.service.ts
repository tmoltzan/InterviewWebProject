import { Injectable } from '@angular/core';
import { ImageMetadata } from './image-metadata';

@Injectable({
  providedIn: 'root',
})
export class ImageMetadataProviderService {
  url = 'https://picsum.photos/v2/list'; //todo: make this a configuration when needed

  constructor() {}

  private imageMetaData: ImageMetadata[] | undefined;

  async getAllImageMetaData(): Promise<ImageMetadata[]> {
    if (!this.imageMetaData || this.imageMetaData.length == 0) {
      const data = await fetch(this.url);
      this.imageMetaData = await data.json();
    }
    return this.imageMetaData ?? [];
  }

  async getImageMetaData(id: string): Promise<ImageMetadata | undefined> {
    const allMetadata = await this.getAllImageMetaData();
    return allMetadata.find((value) => value.id === id);
  }
}
