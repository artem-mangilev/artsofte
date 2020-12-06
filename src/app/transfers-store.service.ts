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
  private transfers: Transfer[] = this.initTransfers()

  addTransfer(transfer: Transfer): void {
    this.transfers.push(transfer)

    this.updateTransfersInStorage()
  }

  removeTransfer(transderId: number): void {
    this.transfers.splice(transderId, 1)

    this.updateTransfersInStorage()
  }

  getAllTransfers(): Transfer[] {
    return this.transfers
  }

  getTransfer(transferId: number): Transfer {
    return this.transfers[transferId]
  }

  private initTransfers(): Transfer[] {
    const transfersStr = localStorage.getItem('transfers')
    const transfers = JSON.parse(transfersStr, (key, value) => {
      if (key === 'transferDate' || key === 'senderCardExpirationDate') {
        return new Date(value)
      }
      return value
    })

    return transfers === null ? [] : transfers
  }

  private updateTransfersInStorage() {
    localStorage.setItem('transfers', JSON.stringify(this.transfers))
  }
}
