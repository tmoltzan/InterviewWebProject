import { Component, Input } from '@angular/core';
import { ImageMetadata } from '../image-metadata';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {
  @Input() imageMetadata!: ImageMetadata;
}
