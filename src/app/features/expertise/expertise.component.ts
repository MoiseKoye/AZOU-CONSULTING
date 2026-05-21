import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroComponent],
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {
  // Liste complète des domaines d'expertise
  expertiseAreas = [
    {
      id: 1,
      title: 'Conseil Stratégique',
      icon: 'fa-chart-line',
      description: 'Nous aidons les organisations à définir leur cap stratégique et à se positionner durablement sur leurs marchés.',
      features: [
        'Positionnement institutionnel',
        'Stratégies de croissance',
        'Intelligence économique',
        'Plans de transformation',
        'Diplomatie économique'
      ]
    },
    {
      id: 2,
      title: 'Investissement & Finance',
      icon: 'fa-coins',
      description: 'Nous structurons financièrement vos projets et vous accompagnons dans la recherche de financements adaptés.',
      features: [
        'Structuration financière',
        'Levée de fonds',
        'Recherche d\'investisseurs',
        'Montage de partenariats public-privé',
        'Modélisation économique'
      ]
    },
    {
      id: 3,
      title: 'Développement & Innovation',
      icon: 'fa-lightbulb',
      description: 'Nous stimulons l\'innovation et accompagnons les projets de développement à fort impact.',
      features: [
        'Développement territorial',
        'Projets innovants',
        'Transformation digitale',
        'Accompagnement entrepreneurial',
        'Structuration d\'écosystèmes'
      ]
    },
    {
      id: 4,
      title: 'Gestion de Projets',
      icon: 'fa-tasks',
      description: 'Nous pilotons vos projets complexes avec une approche rigoureuse et des méthodologies éprouvées.',
      features: [
        'Pilotage de projets',
        'Coordination multisectorielle',
        'Suivi-évaluation',
        'Gestion opérationnelle',
        'Assistance technique'
      ]
    },
    {
      id: 5,
      title: 'Partenariats Stratégiques',
      icon: 'fa-handshake',
      description: 'Nous facilitons la mise en relation et la création de synergies entre acteurs clés.',
      features: [
        'Mise en relation institutionnelle',
        'Coopération internationale',
        'Réseaux d\'affaires',
        'Diplomatie partenariale',
        'Négociation stratégique'
      ]
    }
  ];

  activeId: number = 1;

  toggleAccordion(id: number) {
    this.activeId = this.activeId === id ? 0 : id;
  }
}