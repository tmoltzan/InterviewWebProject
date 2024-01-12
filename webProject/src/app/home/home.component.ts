import { Component } from '@angular/core';
import { ImageListComponent } from '../image-list/image-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageListComponent],
  template: `
    <section class="header"></section>
    <section class="results">
      <app-image-list />
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {}
}
