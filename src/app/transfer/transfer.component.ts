import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      cardNumber: '1111 1111 1111 1111',
    })

    this.form.get('cardNumber').valueChanges.subscribe((value) => {
      console.log(value)
    })
  }
}
