import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";

import { environment } from "./../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminAuthGuard } from "./admin/services/admin-auth-guard.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/components/login/login.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { ShoppingModule } from "./shopping/shopping.module";
import { ProductDescriptionComponent } from "shared/components/product-description/product-description.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(
      [
        { path: "product-description", component: ProductDescriptionComponent },
        { path: "", component: ProductsComponent },
        { path: "login", component: LoginComponent }
      ]
      // ,
      // { enableTracing: true }
    )
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
