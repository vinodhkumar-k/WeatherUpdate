import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isExpanded = false;
  isShowing = false;
  sideNavIcons = [
    {
      title: 'Home',
      icon: 'home'
    },
    {
      title: 'Air Quality',
      icon: 'air_quality'
    }
  ];

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
