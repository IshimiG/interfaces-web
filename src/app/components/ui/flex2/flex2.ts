import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'flex2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './flex2.html',
    styleUrl: './flex2.scss',
    encapsulation: ViewEncapsulation.None
})
export class Flex2 {
    @Input() direction: 'row' | 'column' = 'row';
    @Input() justify: 'start' | 'center' | 'end' = 'start';
    @Input() align: 'start' | 'center' | 'end' = 'start';

    get clases(): string[] {
        return [
            `flex2`,
            `direction--${this.direction}`,
            `align--${this.align}`,
            `justify--${this.justify}`

        ]
    }
    

}