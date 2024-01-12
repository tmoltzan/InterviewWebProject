import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: ImageDetailsComponent,
    title: 'Image - Full Size',
  },
];

export default routeConfig;
