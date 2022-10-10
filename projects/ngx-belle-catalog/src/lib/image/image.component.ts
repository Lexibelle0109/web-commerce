import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() mainImage!: Image;
  @Input() images!: Image[];

  imageIndex: number = -1;
  displayedImage!: Image;

  constructor() {
    this.displayedImage = this.mainImage;
  }

  private validateIndex(index: number): boolean {
    return index >= -1 && index < this.images.length;
  }

  browseImage(changeValue: number): void {
    if (this.validateIndex(this.imageIndex + changeValue)) {
      this.imageIndex = this.imageIndex + changeValue;
      this.setImage();
    }
  }

  setImage(): void {
    this.displayedImage = (this.imageIndex == -1) ? this.mainImage : this.images[this.imageIndex];
  }

  setIndexedImage(index: number): void {
    if (this.validateIndex(index)) {
      this.imageIndex = index;
      this.setImage();
    }
  }

}
