import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-store';
  whiteCups = 0;
  brownCups = 0;
  bananaLeaves = 0;
  binBag50L= 0;

  redirectWhatsApp() {
    let order = '';
    if(this.whiteCups > 0) {
      order += `\n\tWhite 200ML Cups: ${this.whiteCups} Rs ${this.whiteCups}`;
    }
    if(this.brownCups > 0) {
      order += `\n\tBrown 200Ml Cups: ${this.brownCups} Rs ${this.brownCups}`;
    }
    if(this.bananaLeaves > 0) {
      order += `\n\tBanana Leaves: ${this.bananaLeaves} Rs ${this.bananaLeaves * 80}`;
    }
    if(this.binBag50L > 0) {
      order += `\n\tBinBag50L: ${this.binBag50L} Rs ${this.binBag50L * 250}`;
    }
    const message = `Hello MauriVente,\nPlease find my order below: ${order}`;
    const phoneNumber = '+23059125334';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
