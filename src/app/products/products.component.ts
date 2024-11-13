import { Component } from '@angular/core';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
};

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone XY',
      category: 'Électronique',
      price: 799.99,
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Basketball Pro Ball',
      category: 'Sport',
      price: 29.99,
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Casque Audio Sans Fil',
      category: 'Électronique',
      price: 199.99,
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Série de Romans Fantasy',
      category: 'Livres',
      price: 59.99,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Montre Connectée',
      category: 'Électronique',
      price: 249.99,
      rating: 4.4,
    },
  ];

  sortedProducts!: Product[];

  filterProducts!: Product[];

  ngOnInit() {
    this.sortByRating();
    this.fiterByCategory('Électronique');
  }

  sortByRating(): Product[] {
    this.sortedProducts = [...this.products].sort(
      (a, b) => b.rating - a.rating
    );
    return this.sortedProducts;
  }

  fiterByCategory(category: string): Product[] {
    this.filterProducts = this.products.filter(
      (product) => product.category === category
    );
    return this.filterProducts;
  }
}
