  
import { Component } from '@angular/core';
import { Header  } from './header/header';   // Якщо Angular 19+, шлях може бути './header/header' (клас Header)
import { Content  } from './content/content'; // або './content/content' (клас Content)
import { Footer } from './footer/footer';   // або './footer/footer' (клас Footer)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header , Content , Footer ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  title = 'homework';
}
