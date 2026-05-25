import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    address: 'Libreville – Gabon',
    email: 'azouèconsulting@gmail.com',
    phone: '+241 06 26 87 42',
    hours: 'Lundi - Vendredi: 8h00 - 17h30',
    mapUrl: 'https://maps.google.com/?q=Libreville,Gabon'
  };

  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: '#' }
  ];
}