import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { RoutesRoutingModule } from './routes/routes-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { ListaComponent } from './components/lista/lista.component';
import { CardComponent } from './components/menu/menu.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CervejasComponent } from './pages/cervejas/cervejas.component';
import { environment } from '../environments/environment';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import ptBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CardComponent,
    CardapioComponent,
    CervejasComponent,
    NavbarComponent,
    CardItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    RoutesRoutingModule,
    CurrencyMaskModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
