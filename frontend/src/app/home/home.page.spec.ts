import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HealthService } from '../core/api/health.service';
import { HomePageComponent } from './home.page';

class HealthServiceStub {
  getHealth() {
    return of({ status: 'ok' });
  }
}

describe('HomePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [{ provide: HealthService, useClass: HealthServiceStub }],
    }).compileComponents();
  });

  it('should render the VehicleLog health status', async () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('VehicleLog');
    expect(compiled.textContent).toContain('API ok');
  });
});
