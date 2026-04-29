import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false  // <-- ADD THIS EXACT LINE
})
export class AppComponent {
  title = 'zorentfrontend';
}
