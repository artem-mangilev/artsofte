import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const validCardRegex = /^\d{4} \d{4} \d{4} \d{4}$/

    this.form = this.fb.group({
      senderCardNumber: ['', [Validators.pattern(validCardRegex)]],
      senderName: ['', [Validators.required]],
      senderCardExpirationDate: ['', [Validators.required]],
      receiverCardNumber: ['', [Validators.pattern(validCardRegex)]],
      moneyAmount: [0, [Validators.required, Validators.min(1)]],
    })
  }
}
