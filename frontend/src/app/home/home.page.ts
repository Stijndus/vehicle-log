import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { finalize } from 'rxjs';
import { HealthResponse, HealthService } from '../core/api/health.service';

@Component({
  selector: 'app-home-page',
  imports: [
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonSpinner,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private readonly healthService = inject(HealthService);

  protected readonly loading = signal(true);
  protected readonly health = signal<HealthResponse | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly statusVariant = computed<'success' | 'danger'>(() =>
    this.health()?.status === 'ok' ? 'success' : 'danger',
  );

  ngOnInit(): void {
    this.loadHealth();
  }

  protected loadHealth(): void {
    this.loading.set(true);
    this.error.set(null);

    this.healthService
      .getHealth()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          this.health.set(response);
        },
        error: () => {
          this.health.set(null);
          this.error.set('VehicleLog could not reach the Laravel API.');
        },
      });
  }
}
