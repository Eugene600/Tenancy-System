import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter, faDiscord, faAmazon, faApple, faFacebook, faYoutube, faTiktok, faSnapchat, faPinterest, faReddit, faMedium, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faX = faXTwitter;
  faDiscord = faDiscord;
  faAmazon = faAmazon;
  faApple = faApple;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faSnapchat = faSnapchat;
  faPinterest = faPinterest;
  faReddit = faReddit;
  faMedium = faMedium;
  faTelegram = faTelegram;
  faWhatsapp = faWhatsapp;
}
