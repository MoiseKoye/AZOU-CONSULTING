import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Valeurs de l'entreprise
  values = [
    { title: 'Excellence', description: 'La recherche constante de la meilleure qualité dans nos prestations.' },
    { title: 'Intégrité', description: 'Une éthique irréprochable dans toutes nos actions.' },
    { title: 'Innovation', description: 'Des solutions créatives et adaptées aux défis contemporains.' },
    { title: 'Confidentialité', description: 'La protection absolue des informations de nos partenaires.' },
    { title: 'Engagement', description: 'Un dévouement total à la réussite de vos projets.' },
    { title: 'Leadership africain', description: 'Promouvoir l\'excellence et le savoir-faire du continent.' }
  ];

  // Pourquoi nous choisir (4 piliers)
  whyUs = [
    {
      icon: 'fa-layer-group',
      title: 'Expertise multidimensionnelle',
      description: 'Une approche croisant stratégie, finance, développement et partenariats.'
    },
    {
      icon: 'fa-map-marked-alt',
      title: 'Connaissance du terrain africain',
      description: 'Une compréhension approfondie des dynamiques institutionnelles et économiques du continent.'
    },
    {
      icon: 'fa-network-wired',
      title: 'Réseau stratégique',
      description: 'Des connexions avec acteurs publics, privés, investisseurs et partenaires techniques.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Approche orientée impact',
      description: 'Des solutions concrètes, opérationnelles et adaptées aux réalités locales.'
    }
  ];
}