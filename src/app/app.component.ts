import { Component } from '@angular/core';
import { ThemeMode} from './theme-mode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public thememodeservice: ThemeMode, private router: Router) {}

  logout(){
    this.router.navigate(['/tabs/profile']);
  }
}
