import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, inputType: 'fahrenheit' | 'celsius', outputType?: 'fahrenheit' | 'celsius'): string {
    if (inputType === 'fahrenheit' && (outputType === 'celsius' || outputType === undefined)) {
      value = (value - 32) * 5 / 9;
    } else if (inputType === 'celsius' && outputType === 'fahrenheit') {
      value = (value * 9 / 5) + 32;
    }

    let sufix = outputType === 'fahrenheit' ? '°F' : '°C';
    return value.toFixed(2) + sufix;
  }

}
