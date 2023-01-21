import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'News', url: '/folder/News', icon: 'information-circle' },
    /*
    { title: 'E-Mail', url: '/folder/Mail', icon: 'mail' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    {title: 'Impressum', url: '/folder/Impressum', icon: 'pin' },
    */
  ];
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {}
}
