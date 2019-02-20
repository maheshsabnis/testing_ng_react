import { ProductService } from "./servicetese/app.products.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ProductServiceComponent } from "./servicetese/app.productservice.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, ProductServiceComponent],
  imports: [BrowserModule, HttpModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
