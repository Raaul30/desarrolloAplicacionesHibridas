import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf y *ngFor
import { ProductosVenta } from '../interfaces/productos-venta'; // Tu interfaz real
import { ProductoItemComponent } from '../components/producto-item/producto-item.component'; // Tu componente hijo

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, ProductoItemComponent],
})
export class HomePage {

  // Esta es la propiedad que realmente usaremos (sin let)
  listaDeProductos: ProductosVenta[] = [
    { id: 1, nombreProducto: "Fieltro Rojo", cantidad: 18, imagen: "https://picsum.photos/seed/28/200/200" },
    { id: 2, nombreProducto: "Fieltro Negro", cantidad: 41, imagen: "https://picsum.photos/seed/29/200/200" },
    { id: 3, nombreProducto: "Fieltro Azul", cantidad: 34, imagen: "https://picsum.photos/seed/30/200/200" }
  ];

  constructor() {}
}
