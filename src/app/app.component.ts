import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as dataBG from '../assets/metadata/martinruskov.bg.json'
import * as dataEN from '../assets/metadata/martinruskov.en.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

  title?: string;
  introText?: string;
  introText2?: string;
  greeting?: string;
  firstName?: string;
  lastName?: string;
  aboutTitle?: string;
  aboutText?: string;
  aboutText2?: string;
  aboutText3?: string;
  
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
    Object.assign(this, dataBG);
  }

  async toggleLang() {
    const nextLang = this.lang === 'bg' ? 'en' : 'bg';
    const data = nextLang === 'bg' ? dataBG : dataEN;
    Object.assign(this, data);
    this.lang = nextLang;
  }
}
