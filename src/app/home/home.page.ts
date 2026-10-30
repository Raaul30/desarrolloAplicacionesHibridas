import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductosVenta } from '../interfaces/productos-venta';
import { ProductoItemComponent } from '../components/producto-item/producto-item.component';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, CommonModule, ProductoItemComponent, RouterLink, IonButtons, IonIcon  ],
})
export class HomePage {

  listaDeProductos: ProductosVenta[] = [
    { id: 1, nombreProducto: "Fieltro Rojo", cantidad: 18, imagen: "https://picsum.photos/seed/28/200/200" },
    { id: 2, nombreProducto: "Fieltro Negro", cantidad: 41, imagen: "https://picsum.photos/seed/29/200/200" },
    { id: 3, nombreProducto: "Fieltro Azul", cantidad: 34, imagen: "https://picsum.photos/seed/30/200/200" },
    { id: 4, nombreProducto: "Fieltro Verde", cantidad: 25, imagen: "https://picsum.photos/seed/31/200/200" },
    { id: 5, nombreProducto: "Fieltro Amarillo", cantidad: 16, imagen: "https://picsum.photos/seed/32/200/200" },
    { id: 6, nombreProducto: "Hilo de Coser Blanco", cantidad: 52, imagen: "https://picsum.photos/seed/33/200/200" },
    { id: 7, nombreProducto: "Hilo de Coser Negro", cantidad: 47, imagen: "https://picsum.photos/seed/34/200/200" },
    { id: 8, nombreProducto: "Hilo de Coser Rojo", cantidad: 29, imagen: "https://picsum.photos/seed/35/200/200" },
    { id: 9, nombreProducto: "Hilo de Coser Azul", cantidad: 33, imagen: "https://picsum.photos/seed/36/200/200" },
    { id: 10, nombreProducto: "Hilo de Coser Verde", cantidad: 21, imagen: "https://picsum.photos/seed/37/200/200" },
    { id: 11, nombreProducto: "Agujas de Coser", cantidad: 40, imagen: "https://picsum.photos/seed/38/200/200" },
    { id: 12, nombreProducto: "Agujas para Lana", cantidad: 22, imagen: "https://picsum.photos/seed/39/200/200" },
    { id: 13, nombreProducto: "Alfileres de Cabeza", cantidad: 36, imagen: "https://picsum.photos/seed/40/200/200" },
    { id: 14, nombreProducto: "Imperdibles", cantidad: 31, imagen: "https://picsum.photos/seed/41/200/200" },
    { id: 15, nombreProducto: "Dedal Metálico", cantidad: 14, imagen: "https://picsum.photos/seed/42/200/200" },
    { id: 16, nombreProducto: "Tijeras de Costura", cantidad: 12, imagen: "https://picsum.photos/seed/43/200/200" },
    { id: 17, nombreProducto: "Tijeras de Bordar", cantidad: 9, imagen: "https://picsum.photos/seed/44/200/200" },
    { id: 18, nombreProducto: "Cinta Métrica", cantidad: 27, imagen: "https://picsum.photos/seed/45/200/200" },
    { id: 19, nombreProducto: "Cinta de Raso Roja", cantidad: 24, imagen: "https://picsum.photos/seed/46/200/200" },
    { id: 20, nombreProducto: "Cinta de Raso Azul", cantidad: 19, imagen: "https://picsum.photos/seed/47/200/200" },
    { id: 21, nombreProducto: "Cinta de Raso Rosa", cantidad: 32, imagen: "https://picsum.photos/seed/48/200/200" },
    { id: 22, nombreProducto: "Cinta de Encaje Blanca", cantidad: 17, imagen: "https://picsum.photos/seed/49/200/200" },
    { id: 23, nombreProducto: "Botones Blancos", cantidad: 55, imagen: "https://picsum.photos/seed/50/200/200" },
    { id: 24, nombreProducto: "Botones Negros", cantidad: 48, imagen: "https://picsum.photos/seed/51/200/200" },
    { id: 25, nombreProducto: "Botones de Madera", cantidad: 26, imagen: "https://picsum.photos/seed/52/200/200" },
    { id: 26, nombreProducto: "Botones de Colores", cantidad: 43, imagen: "https://picsum.photos/seed/53/200/200" },
    { id: 27, nombreProducto: "Cremallera Negra", cantidad: 20, imagen: "https://picsum.photos/seed/54/200/200" },
    { id: 28, nombreProducto: "Cremallera Blanca", cantidad: 18, imagen: "https://picsum.photos/seed/55/200/200" },
    { id: 29, nombreProducto: "Cremallera Azul", cantidad: 15, imagen: "https://picsum.photos/seed/56/200/200" },
    { id: 30, nombreProducto: "Velcro Blanco", cantidad: 23, imagen: "https://picsum.photos/seed/57/200/200" },
    { id: 31, nombreProducto: "Velcro Negro", cantidad: 28, imagen: "https://picsum.photos/seed/58/200/200" },
    { id: 32, nombreProducto: "Lana Roja", cantidad: 35, imagen: "https://picsum.photos/seed/59/200/200" },
    { id: 33, nombreProducto: "Lana Azul", cantidad: 30, imagen: "https://picsum.photos/seed/60/200/200" },
    { id: 34, nombreProducto: "Lana Blanca", cantidad: 44, imagen: "https://picsum.photos/seed/61/200/200" },
    { id: 35, nombreProducto: "Lana Gris", cantidad: 27, imagen: "https://picsum.photos/seed/62/200/200" },
    { id: 36, nombreProducto: "Ovillo de Algodón", cantidad: 21, imagen: "https://picsum.photos/seed/63/200/200" },
    { id: 37, nombreProducto: "Ganchillo de 3 mm", cantidad: 16, imagen: "https://picsum.photos/seed/64/200/200" },
    { id: 38, nombreProducto: "Ganchillo de 5 mm", cantidad: 13, imagen: "https://picsum.photos/seed/65/200/200" },
    { id: 39, nombreProducto: "Bastidor de Bordado", cantidad: 11, imagen: "https://picsum.photos/seed/66/200/200" },
    { id: 40, nombreProducto: "Hilo de Bordar Multicolor", cantidad: 38, imagen: "https://picsum.photos/seed/67/200/200" },
    { id: 41, nombreProducto: "Relleno de Fibra", cantidad: 19, imagen: "https://picsum.photos/seed/68/200/200" },
    { id: 42, nombreProducto: "Guata para Patchwork", cantidad: 14, imagen: "https://picsum.photos/seed/69/200/200" },
    { id: 43, nombreProducto: "Tela de Algodón Floral", cantidad: 22, imagen: "https://picsum.photos/seed/70/200/200" },
    { id: 44, nombreProducto: "Tela Vaquera", cantidad: 17, imagen: "https://picsum.photos/seed/71/200/200" },
    { id: 45, nombreProducto: "Tela de Lino Beige", cantidad: 12, imagen: "https://picsum.photos/seed/72/200/200" },
    { id: 46, nombreProducto: "Elástico Negro", cantidad: 34, imagen: "https://picsum.photos/seed/73/200/200" },
    { id: 47, nombreProducto: "Elástico Blanco", cantidad: 39, imagen: "https://picsum.photos/seed/74/200/200" },
    { id: 48, nombreProducto: "Pistola de Silicona", cantidad: 8, imagen: "https://picsum.photos/seed/75/200/200" },
    { id: 49, nombreProducto: "Barras de Silicona", cantidad: 45, imagen: "https://picsum.photos/seed/76/200/200" },
    { id: 50, nombreProducto: "Tiza de Sastre", cantidad: 25, imagen: "https://picsum.photos/seed/77/200/200" },
    { id: 51, nombreProducto: "Boli Borrable", cantidad: 12, imagen: "https://picsum.photos/seed/78/200/200" }
  ];

  constructor() {
    // Registramos el icono de ajustes que vamos a usar en la vista
    addIcons({ settingsOutline });
  }
}