import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from '../assets/metadata/martinruskov.bg'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

  title?: string;
  introText?: string;
  greeting?: string;
  firstName?: string;
  lastName?: string;
  aboutTitle?: string;
  aboutText?: string;
  
  servicesTitle?: string;
  serviceList?: any[];
  servicesSubscript?: string;
  contactsTitle?: string;
  contactList?: any[];
  contactsSuperscript?: string;

  location?: string;

  googleMapsLink?: string;

  lang?: string;

  constructor() {
    Object.assign(this, data.default);
  }

  async toggleLang() {
    const nextLang = this.lang === 'bg' ? 'en' : 'bg';
    const metadataFileName = `../assets/metadata/martinruskov.${nextLang}.ts`;
    const data = (await import(metadataFileName)).default
    Object.assign(this, data);
    this.lang = nextLang;
  }
}
