import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { SectionHeader } from '../../shared/section-header';
import { Icon } from '../../shared/icon';
import {
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryImage,
  GalleryService,
} from '../../core/services/gallery.service';

@Component({
  selector: 'app-gallery',
  imports: [SectionHeader, Icon],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery implements OnInit {
  private readonly galleryService = inject(GalleryService);

  protected readonly categories = GALLERY_CATEGORIES;
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly allImages = signal<GalleryImage[]>([]);
  protected readonly activeCategory = signal<GalleryCategory>('all');
  protected readonly lightboxImage = signal<GalleryImage | null>(null);

  protected readonly filteredImages = computed(() => {
    const cat = this.activeCategory();
    const imgs = this.allImages();
    return cat === 'all' ? imgs : imgs.filter((img) => img.category === cat);
  });

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  protected async retry(): Promise<void> {
    await this.load();
  }

  private async load(): Promise<void> {
    this.error.set(null);
    this.loading.set(true);
    try {
      const images = await this.galleryService.fetchImages();
      this.allImages.set(images);
    } catch {
      this.error.set('Failed to load gallery images. Please try again later.');
    } finally {
      this.loading.set(false);
    }
  }

  protected selectCategory(cat: GalleryCategory): void {
    this.activeCategory.set(cat);
  }

  protected openLightbox(img: GalleryImage): void {
    this.lightboxImage.set(img);
    document.body.style.overflow = 'hidden';
  }

  protected closeLightbox(): void {
    this.lightboxImage.set(null);
    document.body.style.overflow = '';
  }

  protected navigateLightbox(direction: 1 | -1): void {
    const current = this.lightboxImage();
    if (!current) return;
    const imgs = this.filteredImages();
    const idx = imgs.findIndex((img) => img.id === current.id);
    const next = imgs[(idx + direction + imgs.length) % imgs.length];
    this.lightboxImage.set(next);
  }
}
