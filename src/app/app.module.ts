import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomButtonComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customButton = createCustomElement(CustomButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

}