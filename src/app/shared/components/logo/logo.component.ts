import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() height: string = 'h-10 md:h-12';  // Taille par défaut
  @Input() showText: boolean = false;        // Pour afficher ou non le texte
}