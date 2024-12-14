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
    const message = "Hello,\n\nThis is a message with a new line.\n\t- This line is indented.\n\t- This is another indented line.\n\nBest regards,\nYour Name";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
