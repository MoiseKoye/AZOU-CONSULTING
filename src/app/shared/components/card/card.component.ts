import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,  // ← Ajouter ceci
  imports: [],  // ← Ajouter ceci
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() icon: string = 'fa-chart-line';
  @Input() title: string = '';
  @Input() description: string = '';
}