import { NgModule } from '@angular/core';
import { NgxBelleCatalogComponent } from './ngx-belle-catalog.component';
import { TileComponent } from './tile/tile.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    NgxBelleCatalogComponent,
    TileComponent,
    ImageComponent
  ],
  imports: [
  ],
  exports: [
    NgxBelleCatalogComponent,
    TileComponent
  ]
})
export class NgxBelleCatalogModule { }
