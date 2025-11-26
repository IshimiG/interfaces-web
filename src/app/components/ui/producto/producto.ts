import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-producto',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './producto.html',
    styleUrls: ['./producto.scss']
})

export class Producto {
    @Input() id!: number
    @Input() name!: string
    @Input() urlImage!: string
    @Input() precioActual!: number
    @Input() precioAnterior!: number
    @Input() valoracion!: number
    @Input() opiniones!: number
    @Input() fechaEnvio!: string
    @Input() precioEnvio!: number
    @Input() otrosEnvios!: boolean
}