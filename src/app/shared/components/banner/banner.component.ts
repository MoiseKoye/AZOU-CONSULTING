import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() title: string = 'Stratégie · Conseil · <span class="text-gold">Investissement</span>';
  @Input() subtitle: string = 'AZOUÈ CONSULTING accompagne les acteurs publics et privés dans la conception, la structuration, l\'intermédiation et la mise en œuvre de projets stratégiques à fort impact économique et social.';
  @Input() buttonText: string = 'Nos expertises';
  @Input() buttonLink: string = '/expertise';
  @Input() secondaryButtonText: string = 'Prendre rendez-vous';
  @Input() secondaryButtonLink: string = '/contact';
  @Input() backgroundImage: string = 'assets/images/banner-bg.png';
}