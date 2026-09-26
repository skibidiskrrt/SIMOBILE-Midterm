import { Component } from '@angular/core';
import { ThemeMode} from './theme-mode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public thememodeservice: ThemeMode) {}
}
