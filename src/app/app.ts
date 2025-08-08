import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html', // ✅ make sure this file exists
  styleUrl: './app.css' // ✅ make sure this file exists
})
export class App {
  protected readonly title = signal('property-managment-software');
}
