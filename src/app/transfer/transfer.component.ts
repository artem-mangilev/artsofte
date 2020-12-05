import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  }

  onSubmit(formData) {
    const transfer: Transfer = {
      ...formData,
      senderCardExpirationDate: new Date(formData.senderCardExpirationDate),
      transferDate: new Date(),
    }

    this.transfersStoreService.addTransfer(transfer)
  }
}
