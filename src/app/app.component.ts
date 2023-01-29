import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'News', url: '/folder', icon: 'information-circle' },
    {title: 'Impressum', url: '/impressum', icon: 'pin' },
    { title: 'Login', url: '/login', icon: 'key' },
    /*
    
    { title: 'E-Mail', url: '/folder/Mail', icon: 'mail' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    
    */
  ];
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {}
}
