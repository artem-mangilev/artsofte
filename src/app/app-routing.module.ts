import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HistoryComponent } from './history/history.component'
import { TransferComponent } from './transfer/transfer.component'

const routes: Routes = [
  {
    path: 'transfer',
    component: TransferComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: '',
    redirectTo: '/transfer',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/transfer',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
