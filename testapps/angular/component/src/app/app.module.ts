import { FormsModule } from "@angular/forms";
import { EmployeeComponent } from "./empcomponent/app.emp.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule {}
