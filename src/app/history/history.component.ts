import { Component, OnInit } from '@angular/core'
import { Transfer, TransfersStoreService } from '../transfers-store.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(private transfersStoreService: TransfersStoreService) {}

  ngOnInit(): void {}

  get transfers(): Transfer[] {
    return this.transfersStoreService.getAllTransfers()
  }

  onDeleteButtonClick(index: number) {
    this.transfersStoreService.removeTransfer(index)
  }
}
