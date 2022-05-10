import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'ABM Stock';
  autor = 'DPV';
  angular = `Angular v${VERSION.full}`;
  anio = '2022';
  // anio = (new Date()).getFullYear();
}
