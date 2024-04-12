import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { truncate } from 'node:fs';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-firebase-crud';
}
