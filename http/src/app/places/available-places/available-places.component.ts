import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isLoading = signal<boolean>(false);
  error = signal<string | undefined>(undefined);
  private httpClient = inject(HttpClient);

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isLoading.set(true);
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places').pipe(
        map((resData) => resData.places),
        catchError((err) => {
          console.error(err);
          throw Error('Failed to fetch places. Please try again later.');

        }))
      .subscribe({
        next: (resData) => {
          this.places.set(resData);
          console.log(resData);
        },
        complete: () => {
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set(err.message || 'An error occurred while fetching places.');
          this.isLoading.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(place: Place) {
    console.log('Selected place:', place);
    this.httpClient.put(`http://localhost:3000/user-places`, { placeId: place.id }).subscribe({
      next: (resData) => {
        console.log('Place updated successfully:', resData);
      },
      error: (err) => {
        console.error('Error updating place:', err);
      },
      complete: () => {
        console.log('Update request completed.');
      }
    });
  }
}
