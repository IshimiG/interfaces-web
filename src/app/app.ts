import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Boton } from './components/ui/boton/boton';
import { Panel } from './components/ui/panel/panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Boton, Panel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularProject');
  alerta() : void {
    alert('Hola mundo');
  }
}
