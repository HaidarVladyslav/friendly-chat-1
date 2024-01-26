import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
   <div class="site-layout">
    <app-header />
    <div class="container"></div>
    <router-outlet />
  </div>

  `,
  styles: [],
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'FriendlyChat1';
}
