import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent, HeroComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = {
    address: 'Libreville – Gabon',
    email: 'liacediwa@gmail.com',
    phone: '+241 XX XX XX XX',
    hours: 'Lundi - Vendredi: 9h00 - 18h00',
    mapUrl: 'https://maps.google.com/?q=Libreville,Gabon'
  };

  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: '#' }
  ];

  onSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Formulaire soumis:', this.contactForm);
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
      setTimeout(() => this.submitSuccess = false, 5000);
    }, 1500);
  }
}