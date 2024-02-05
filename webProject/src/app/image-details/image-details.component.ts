import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ImageMetadataProviderService } from '../image-metadata-provider.service';
import { ImageMetadata } from '../image-metadata';
import { ImageHeaderComponent } from '../image-header/image-header.component';

@Component({
  selector: 'app-image-details',
  standalone: true,
  imports: [CommonModule, ImageHeaderComponent],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css',
})
export class ImageDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  imageId = '';
  imageMetadata: ImageMetadata | undefined;
  imageMetaDataService: ImageMetadataProviderService = inject(
    ImageMetadataProviderService
  );

  constructor() {
    this.imageId = this.route.snapshot.params['id'];
  }

  async ngOnInit(): Promise<void> {
    this.imageMetaDataService
      .getImageMetaData(this.imageId)
      .then((imageMetaData: ImageMetadata | undefined) => {
        this.imageMetadata = imageMetaData;
      });
  }
}
