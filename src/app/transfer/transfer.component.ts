import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Transfer, TransfersStoreService } from '../transfers-store.service'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private transfersStoreService: TransfersStoreService
  ) {}

  ngOnInit(): void {
    const validCardRegex = /^\d{4} \d{4} \d{4} \d{4}$/

    this.form = this.fb.group({
      senderName: ['', [Validators.required]],
      senderCardNumber: ['', [Validators.pattern(validCardRegex)]],
      senderCardExpirationDate: ['', [Validators.required]],
      receiverCardNumber: ['', [Validators.pattern(validCardRegex)]],
      moneyAmount: [0, [Validators.required, Validators.min(1)]],
    })

    const transferIndex = this.route.snapshot.paramMap.get(
      'repeatedTransferIndex'
    )

    if (transferIndex !== null) {
      const transfer = this.transfersStoreService.getTransfer(+transferIndex)
      const expirationDate = this.getYearAndMonth(
        transfer.senderCardExpirationDate
      )

      this.form.setValue({
        senderName: transfer.senderName,
        senderCardNumber: transfer.senderCardNumber,
        senderCardExpirationDate: expirationDate,
        receiverCardNumber: transfer.receiverCardNumber,
        moneyAmount: transfer.moneyAmount,
      })
    }
  }

  onSubmit(formData) {
    const transfer: Transfer = {
      ...formData,
      senderCardExpirationDate: new Date(formData.senderCardExpirationDate),
      transferDate: new Date(),
    }

    this.transfersStoreService.addTransfer(transfer)
  }

  private getYearAndMonth(date: Date): string {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${year}-${month}`
  }
}
