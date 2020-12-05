import { Injectable } from '@angular/core'

export interface Transfer {
  senderName: string
  senderCardNumber: string
  senderCardExpirationDate: Date
  receiverCardNumber: string
  transferDate: Date
  moneyAmount: number
}

@Injectable({
  providedIn: 'root',
})
export class TransfersStoreService {
  private transfers: Transfer[] = []

  addTransfer(transfer: Transfer): void {
    this.transfers.push(transfer)
  }

  removeTransfer(transderId: number): void {
    this.transfers.splice(transderId, 1)
  }

  getAllTransfers(): Transfer[] {
    return this.transfers
  }

  getTransfer(transferId: number): Transfer {
    return this.transfers[transferId]
  }
}
