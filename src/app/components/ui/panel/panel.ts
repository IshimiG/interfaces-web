import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './panel.html',
    styleUrls: ['./panel.scss']
})
export class Panel { 
    @Input() title: string = 'Titulo del panel';
    @Input() type: 'azul' | 'naranja' | 'rojo' = 'azul';
}