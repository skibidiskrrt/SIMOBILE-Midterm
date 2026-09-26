import { Component, OnInit } from '@angular/core';
import { ThemeMode} from '../theme-mode'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {

  constructor(public thememodeservice: ThemeMode) { }

  ngOnInit() {
  }

}
