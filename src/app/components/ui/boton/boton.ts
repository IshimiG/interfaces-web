import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrls: ['./boton.scss']
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
  @Input() href: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }
}
