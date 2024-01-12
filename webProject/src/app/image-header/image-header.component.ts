import { Component, Input } from '@angular/core';
import { ImageMetadata } from '../image-metadata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-header.component.html',
  styleUrl: './image-header.component.css',
})
export class ImageHeaderComponent {
  @Input() imageMetadata!: ImageMetadata;
}
