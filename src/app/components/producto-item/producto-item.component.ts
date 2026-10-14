import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonItem, IonLabel, IonButton, IonBadge, IonThumbnail, IonCheckbox } from '@ionic/angular';
import { ProductosVenta } from '../../interfaces/productos-venta';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss'],
  standalone: true, // ¡Clave para componentes independientes!
  imports: [CommonModule, IonCard, IonItem, IonLabel, IonButton, IonBadge, IonThumbnail, IonCheckbox],
})
export class ProductoItemComponent {

  @Input() producto!: ProductosVenta;

  constructor() { }
  
  mostrarDetalles() {
    console.log('Datos del producto:', this.producto);
  }
}