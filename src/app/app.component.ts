import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from "./components/product/product.component";
import { Product } from "./models/product.model";
import { NgFor } from '@angular/common';
import { UserComponent } from "./components/user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, HttpClientModule, NgFor, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repaso-app';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'New title';
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log(data);
        this.products = data;
      });
  }
}
