import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrls: ['./boton.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
  @Input() importancia: 'primaria' | 'secundaria' | 'terciaria' = 'primaria';
  @Input() href: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }
}
