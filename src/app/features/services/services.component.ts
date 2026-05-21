import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, HeroComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  activeTab: string = 'enterprises';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  enterprisesServices = [
    { title: 'Conseil en développement', description: 'Accompagnement stratégique pour accélérer votre croissance et optimiser vos performances.', icon: 'fa-chart-line' },
    { title: 'Structuration financière', description: 'Optimisation de votre structure financière pour une meilleure allocation des ressources.', icon: 'fa-coins' },
    { title: 'Expansion régionale', description: 'Stratégies d\'implantation et de développement sur les marchés africains.', icon: 'fa-map-marked-alt' },
    { title: 'Recherche de partenaires', description: 'Identification et mise en relation avec des partenaires stratégiques locaux et internationaux.', icon: 'fa-handshake' },
    { title: 'Gestion de projets stratégiques', description: 'Pilotage opérationnel de vos projets à fort enjeu stratégique.', icon: 'fa-tasks' }
  ];

  institutionsServices = [
    { title: 'Assistance stratégique', description: 'Appui à la définition et la mise en œuvre des politiques publiques.', icon: 'fa-landmark' },
    { title: 'Développement territorial', description: 'Accompagnement des collectivités dans leurs projets de développement local.', icon: 'fa-city' },
    { title: 'Programmes de coopération', description: 'Montage et gestion de programmes de coopération nationale et internationale.', icon: 'fa-globe' },
    { title: 'Mobilisation de financements', description: 'Recherche et structuration de financements pour les projets publics.', icon: 'fa-hand-holding-usd' },
    { title: 'Structuration de politiques publiques', description: 'Appui à l\'élaboration et à l\'évaluation des politiques sectorielles.', icon: 'fa-file-alt' }
  ];

  investorsServices = [
    { title: 'Identification d\'opportunités', description: 'Détection et analyse des opportunités d\'investissement à fort potentiel.', icon: 'fa-search' },
    { title: 'Due diligence stratégique', description: 'Audit approfondi des cibles et des projets avant investissement.', icon: 'fa-clipboard-list' },
    { title: 'Accompagnement local', description: 'Assistance terrain pour faciliter vos opérations en Afrique centrale.', icon: 'fa-map-pin' },
    { title: 'Facilitation institutionnelle', description: 'Mise en relation avec les acteurs institutionnels et réglementaires.', icon: 'fa-building' },
    { title: 'Déploiement opérationnel', description: 'Appui à l\'exécution et au suivi de vos investissements sur le terrain.', icon: 'fa-rocket' }
  ];

  getCurrentServices() {
    switch(this.activeTab) {
      case 'enterprises': return this.enterprisesServices;
      case 'institutions': return this.institutionsServices;
      case 'investors': return this.investorsServices;
      default: return this.enterprisesServices;
    }
  }
}