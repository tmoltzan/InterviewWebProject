import { Injectable } from '@angular/core';
import { ImageMetadata } from './image-metadata';

@Injectable({
  providedIn: 'root',
})
export class ImageMetadataProviderService {
  url = 'https://picsum.photos/v2/list'; //todo: make this a configuration when needed

  constructor() {}

  async getAllImageMetaData(): Promise<ImageMetadata[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
