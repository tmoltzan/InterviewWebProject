import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterValueServiceService {
  constructor() {}

  private authorName: String = '';
  private isImportant: boolean = false;

  public setAuthorName(authorName: String): void {
    this.authorName = authorName;
  }

  public setIsImportant(isImportant: boolean): void {
    this.isImportant = isImportant;
  }

  public getAuthorName(): String {
    return this.authorName;
  }

  public getIsImportant(): boolean {
    return this.isImportant;
  }
}
