import { Component, Input } from '@angular/core';
import { ImageMetadata } from '../image-metadata';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageHeaderComponent } from '../image-header/image-header.component';
@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ImageHeaderComponent],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {
  @Input() imageMetadata!: ImageMetadata;
}
