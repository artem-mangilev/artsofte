import { Component, forwardRef, OnInit } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardNumberComponent),
      multi: true,
    },
  ],
})
export class CardNumberComponent implements OnInit, ControlValueAccessor {
  cardNumberSegments: string[] = Array(4).fill('')

  constructor() {}

  ngOnInit(): void {}

  onChange(value: string) {}

  onInput(index: number, value: string) {
    this.cardNumberSegments[index] = value

    const stringified = this.cardNumberSegments.join(' ')
    this.onChange(stringified)
  }

  writeValue(value: string) {
    this.cardNumberSegments = value.split(' ')
  }

  registerOnChange(fn) {
    this.onChange = fn
  }

  registerOnTouched() {}
}
