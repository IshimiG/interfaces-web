import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'flex',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './flex.html',
    styleUrls: ['./flex.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Flex { 
    @Input() direction: 'row' | 'column' = 'row';
    @Input() justify: 'start' | 'center' | 'end' | 'between' = 'start';
    @Input() align: 'start' | 'center' | 'end' = 'start';

    directionClass(): string {
        return `flex-${this.direction}`;
    }
    justifyClass(): string {
        return `justify-${this.justify}`;
    }
    alignClass(): string {
        return `align-${this.align}`;
    }
}