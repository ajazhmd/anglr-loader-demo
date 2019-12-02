import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'az-loader-demo';
  loader = false;
  toggleLoader() {
    this.loader = !this.loader;
  }
}
