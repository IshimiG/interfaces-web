import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'div[flex2]',
    template: '<ng-content></ng-content>',
    styleUrl: './flex2.scss',
    encapsulation: ViewEncapsulation.None
})
export class Flex2 {
    @Input() direction: 'row' | 'column' = 'row';
    @Input() justify: 'start' | 'center' | 'end' = 'start';
    @Input() align: 'start' | 'center' | 'end' = 'start';

    @HostBinding('class')
    get clases(): string[] {
        return [
            `flex2`,
            `flex--direction--${this.direction}`,
            `flex--align--${this.align}`,
            `flex--justify--${this.justify}`

        ]
    }
}