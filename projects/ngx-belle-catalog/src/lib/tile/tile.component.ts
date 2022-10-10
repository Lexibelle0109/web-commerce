import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() product!: Product;
  displayedImage!: Image;
  imageIndex!: number;

  constructor() {
    this.displayedImage = this.product.mainImage;
    this.imageIndex = -1;
  }

  ngOnInit(): void {
  }

  browseImage(changeValue: number): void {
    const newIndex: number = this.imageIndex + changeValue;
    if (newIndex >= -1 && newIndex < this.product.images.length) {
      this.imageIndex = newIndex;
      this.setImage();
    }
  }

  setImage(): void {
    if (this.imageIndex == -1) { 
      this.displayedImage = this.product.mainImage;
    } else {
      this.displayedImage = this.product.images[this.imageIndex];
    }
  }
}
