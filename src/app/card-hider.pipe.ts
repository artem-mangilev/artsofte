import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cardHider',
})
export class CardHiderPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/^(\d{4}) \d{4} \d{4} (\d{4})$/, '$1 **** **** $2')
  }
}
