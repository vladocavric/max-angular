import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  places = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places').subscribe({
        next: (resData) => {
          console.log('User places fetched successfully:', resData.places);
          this.places.set(resData.places);
        }
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onDeletePlace(place: Place) {
    this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).subscribe({
      next: (resData) => {
        console.log('Place deleted successfully:', resData);
        this.places.update((currentPlaces) => currentPlaces.filter((p) => p.id !== place.id));
      },
      error: (err) => {
        console.error('Error deleting place:', err);
      },
    });
  }
}
