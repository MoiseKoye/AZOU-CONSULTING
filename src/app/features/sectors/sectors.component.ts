import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroComponent],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent {
  sectors = [
    { id: 1, title: 'Énergie & Ressources', icon: 'fa-oil-can', description: 'Accompagnement des projets énergétiques et de valorisation des ressources naturelles.', details: 'Conseil stratégique pour les entreprises du secteur pétrolier, gazier, minier et des énergies renouvelables.' },
    { id: 2, title: 'Industrie & Transformation', icon: 'fa-industry', description: 'Soutien aux projets industriels et de transformation locale des matières premières.', details: 'Optimisation des chaînes de valeur, développement industriel et création d\'écosystèmes productifs.' },
    { id: 3, title: 'Finance & Investissement', icon: 'fa-chart-line', description: 'Structuration financière et accompagnement des acteurs du secteur financier.', details: 'Banques, assurances, institutions de microfinance, fonds d\'investissement et marchés financiers.' },
    { id: 4, title: 'Infrastructures', icon: 'fa-road', description: 'Développement et financement de grands projets d\'infrastructures.', details: 'Transport, logistique, ports, aéroports, et infrastructures urbaines et rurales.' },
    { id: 5, title: 'Santé & Innovation', icon: 'fa-heartbeat', description: 'Projets innovants dans le secteur de la santé et des biotechnologies.', details: 'E-santé, infrastructures médicales, prévention, et accès aux soins en Afrique centrale.' },
    { id: 6, title: 'Numérique & Technologies', icon: 'fa-microchip', description: 'Transformation digitale et innovation technologique.', details: 'Solutions digitales, fintech, intelligence artificielle, et accompagnement des startups tech.' },
    { id: 7, title: 'Développement territorial', icon: 'fa-city', description: 'Stratégies de développement régional et local.', details: 'Aménagement du territoire, politiques urbaines, et développement des zones rurales.' },
    { id: 8, title: 'Éducation & Formation', icon: 'fa-graduation-cap', description: 'Projets éducatifs et programmes de formation professionnelle.', details: 'Renforcement des capacités, innovation pédagogique, et employabilité des jeunes.' },
    { id: 9, title: 'Entrepreneuriat', icon: 'fa-lightbulb', description: 'Accompagnement des entrepreneurs et startups.', details: 'Mentorat, mise en réseau, recherche de financements, et structuration de projets innovants.' },
    { id: 10, title: 'Coopération internationale', icon: 'fa-globe', description: 'Partenariats et coopération transfrontalière.', details: 'Mise en relation d\'acteurs internationaux, facilitation des échanges et diplomatie économique.' }
  ];

  activeSector: any = null;

  openDetail(sector: any) {
    this.activeSector = sector;
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.activeSector = null;
    document.body.style.overflow = 'auto';
  }
}