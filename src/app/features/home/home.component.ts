import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  expertiseAreas = [
    { icon: 'fa-chart-line', title: 'Conseil Stratégique', description: 'Positionnement, croissance, intelligence économique.' },
    { icon: 'fa-coins', title: 'Investissement & Finance', description: 'Structuration financière, levée de fonds.' },
    { icon: 'fa-lightbulb', title: 'Développement & Innovation', description: 'Territoire, digital, entrepreneuriat.' },
  ];

  keySectors = [
    { icon: 'fa-oil-can', title: 'Énergie & Ressources', description: 'Accompagnement des projets énergétiques.' },
    { icon: 'fa-industry', title: 'Industrie & Transformation', description: 'Développement industriel local.' },
    { icon: 'fa-chart-line', title: 'Finance & Investissement', description: 'Structuration financière.' },
    { icon: 'fa-road', title: 'Infrastructures', description: 'Grands projets d\'infrastructures.' }
  ];

  whyUs = [
    { icon: 'fa-layer-group', title: 'Expertise multidimensionnelle', description: 'Stratégie, finance, développement et partenariats.' },
    { icon: 'fa-map-marked-alt', title: 'Connaissance du terrain africain', description: 'Dynamiques institutionnelles et économiques du continent.' },
    { icon: 'fa-network-wired', title: 'Réseau stratégique', description: 'Connexions avec acteurs clés publics et privés.' },
    { icon: 'fa-chart-line', title: 'Approche orientée impact', description: 'Solutions concrètes et adaptées aux réalités locales.' }
  ];

  stats = [
    { value: '10+', label: 'Secteurs d\'intervention' },
    { value: '5', label: 'Domaines d\'expertise' },
    { value: '50+', label: 'Projets accompagnés' },
    { value: '10+', label: 'Pays partenaires' }
  ];
}