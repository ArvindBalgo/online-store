import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-store';

  redirectToWhatsApp() {
    const phoneNumber = '+23059125334'; // Replace with the recipient's phone number
    const message = '<ul><li>2000 Cups</li><li>10 packs Banana Leafs</li></ul>>'; // Replace with your message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
