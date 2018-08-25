import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { DataTableModule } from "angular-4-data-table/dist";
import { CustomFormsModule } from "ng2-validation";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductDescriptionComponent } from "./components/product-description/product-description.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { CategoryService } from "./services/category.service";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { UserService } from "./services/user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {
        path: "product-description/:id",
        component: ProductDescriptionComponent
      }
    ])
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductDescriptionComponent
  ],
  exports: [
    ProductCardComponent,
    ProductDescriptionComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule {}
