# AZOUÈ CONSULTING – Site vitrine

Site web vitrine développé avec **Angular 17+**, **Tailwind CSS**, **Font Awesome** et une architecture moderne en composants standalone.

## 📦 Technologies utilisées

- Angular 17.3.17 (standalone components)
- Tailwind CSS
- Font Awesome
- TypeScript

## 🎨 Identité visuelle

- **Couleurs** : Bleu nuit (`#0A1927`), Or (`#C6A43F`), Vert émeraude (`#2E5A4B`)
- **Police** : [Inter](https://fonts.google.com/specimen/Inter)

## 📁 Architecture du projet
src/
├── app/
│ ├── core/ # Services (SEO, etc.)
│ ├── features/ # Pages : home, about, expertise, services, sectors, contact
│ ├── shared/ # Composants réutilisables
│ │ ├── components/ # button, card, header, footer, hero, banner, logo, scroll-to-top
│ │ └── models/ # Interfaces TypeScript
│ ├── app.component.ts
│ ├── app.routes.ts
│ └── app.config.ts
├── assets/ # Images, logo, favicon
├── styles.css # Styles globaux + variables + classes utilitaires
├── responsive.css # Media queries globales
└── index.html


## 🧩 Composants principaux

| Composant | Rôle |
|-----------|------|
| `HeaderComponent` | Navigation desktop / mobile (menu latéral) |
| `FooterComponent` | Liens, contact, réseaux sociaux |
| `HeroComponent` | Bannière avec image de fond, overlay, CTA |
| `BannerComponent` | Version pleine largeur pour l’accueil |
| `CardComponent` | Carte réutilisable (expertise, secteurs) |
| `ButtonComponent` | Boutons avec variantes (primary, outline, dark) |
| `LogoComponent` | Logo SVG/image réutilisable |
| `ScrollToTopComponent` | Bouton de retour en haut |

## 📄 Pages disponibles

| Route | Page |
|-------|------|
| `/` | Accueil (bannière + sections) |
| `/about` | À propos (vision, mission, valeurs) |
| `/expertise` | Domaines d’expertise (accordéon) |
| `/services` | Services par cible (entreprises, institutions, investisseurs) |
| `/sectors` | Secteurs d’intervention (grille modale) |
| `/contact` | Coordonnées + carte + FAQ |

## 🚀 Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve

# Build de production
ng build

📱 Responsive

    Mobile (< 768px) : menu latéral, marges réduites

    Tablette (768px - 1024px) : adaptation des grilles

    Desktop (≥ 1024px) : affichage complet