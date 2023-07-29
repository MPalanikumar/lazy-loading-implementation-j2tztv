import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'power'
})

export class PowerPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}