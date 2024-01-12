import { Component, Input } from '@angular/core';
import { ImageMetadata } from '../image-metadata';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {
  @Input() imageMetadata!: ImageMetadata;
}
