import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TransferComponent } from './transfer/transfer.component'
import { HistoryComponent } from './history/history.component'
import { CardNumberComponent } from './transfer/card-number/card-number.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardHiderPipe } from './card-hider.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    HistoryComponent,
    CardNumberComponent,
    CardHiderPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
