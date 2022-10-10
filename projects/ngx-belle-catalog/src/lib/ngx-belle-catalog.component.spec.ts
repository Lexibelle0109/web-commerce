import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBelleCatalogComponent } from './ngx-belle-catalog.component';

describe('NgxBelleCatalogComponent', () => {
  let component: NgxBelleCatalogComponent;
  let fixture: ComponentFixture<NgxBelleCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBelleCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBelleCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
