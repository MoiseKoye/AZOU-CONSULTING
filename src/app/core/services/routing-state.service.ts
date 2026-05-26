import { Injectable } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingStateService {
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private router: Router) {
    // Début de navigation : afficher le skeleton
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.isLoading.next(true);
    });

    // Fin de navigation : cacher le skeleton après un petit délai
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        this.isLoading.next(false);
      }, 600); // Délai pour voir le skeleton (600ms)
    });
  }

  hideLoader() {
    this.isLoading.next(false);
  }

  showLoader() {
    this.isLoading.next(true);
  }
}