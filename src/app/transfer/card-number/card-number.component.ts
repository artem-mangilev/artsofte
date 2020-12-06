import {
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'
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
  cardNumberSegments: string[]

  @ViewChildren('input') inputs: QueryList<ElementRef>

  constructor() {}

  ngOnInit(): void {}

  onChange(value: string) {}

  onInput(index: number, value: string) {
    if (value.length === 4) {
      const nextInputElement = this.inputs.toArray()[index + 1]?.nativeElement
      nextInputElement?.focus()
    }

    this.cardNumberSegments[index] = value

    const stringified = this.cardNumberSegments.join(' ')
    this.onChange(stringified)
  }

  writeValue(value: string) {
    if (value) {
      this.cardNumberSegments = value.split(' ')
    } else {
      this.cardNumberSegments = Array(4).fill('')
    }
  }

  registerOnChange(fn) {
    this.onChange = fn
  }

  registerOnTouched() {}
}
