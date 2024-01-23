import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  hasPrev: boolean = false;
  hasNext: boolean = false;
  page = 1;
  readonly pageSize = 100;

  constructor() {}
}
