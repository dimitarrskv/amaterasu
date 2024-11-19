import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styles: `

  `
})
export class AppComponent {

  bgColor = '';
  fontSizeHeader = '#222222';
  fontSizeDefault = '16px';
  fontFamilyL1 = '';
  fontFamilyL2 = '';

  title = 'Dental student, Plovdiv MU';
  introText = 'I offer my services to anyone who wants to take care of their oral health and hygiene. The examination and consultation are free, and the prices of the other manipulations are symbolic. Come to my place or call for a consultation. I pay attention to each patient with professionalism and care. I am waiting for you!'
  name = 'MARTIN RUSKOV'
  aboutTitle = 'ABOUT'
  aboutText = 'Martin Ruskov, a student of dental medicine at Plovdiv Medical University, offers professional services at symbolic prices, unreservedly striving for perfection in every procedure. His attention to detail and pursuit of perfectionism ensure high quality care for each patient. Martin always puts the comfort of his patients first, providing them with calm and safe treatment.'
  
  servicesTitle = 'SERVICES'
  serviceList = [
    {
      name: 'Free examination and consultation',
      price: 'Free'
    },
    {
      name: 'Manufacturing of prostheses, crowns, bridges',
      price: '5lv'
    },
    {
      name: 'Tooth extraction',
      price: '5lv'
    },
    {
      name: 'Root treatment',
      price: '5lv'
    },
    {
      name: 'Caries treatment',
      price: '5lv'
    },
    {
      name: 'Cleaning tartar',
      price: '5lv'
    }
  ]
  servicesSubscript = 'All manipulations are performed under the strict supervision of an experienced specialist from the Faculty of Dental Medicine at the Medical University of Plovdiv, in order to guarantee the safety and quality of the procedures.'
  contactsTitle = 'CONTACTS'
  contactList = [
    { label: '+359 892 481 190',
      value: '+359 892 481 190',
      type: 'phone'
    },
    { label: 'Plovdiv Center, bul. "Hristo Botev" 3',
      value: 'Plovdiv Center, bul. "Hristo Botev" 3',
      type: 'address'
    },
    { label: 'martiruskov0123@gmail.com',
      value: 'martiruskov0123@gmail.com',
      type: 'email'
    },
    { label: '@marti_ruskov',
      value: 'https://www.instagram.com/marti_ruskov/?hl=en',
      type: 'instagram'
    },
    { label: '+359 892 481 190',
      value: 'viber://chat?number=359892481190',
      type: 'viber'
    },
    { label: '+359 892 481 190',
      value: 'https://wa.me/+359892481190',
      type: 'whatsapp'
    },
    { label: 'martin.ruskov.7',
      value: 'https://www.facebook.com/martin.ruskov.7',
      type: 'facebook'
    }
  ]
}
