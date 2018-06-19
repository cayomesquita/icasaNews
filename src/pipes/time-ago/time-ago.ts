import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimeAgoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    var date: Date = new Date(value);
    var currentDate: Date = new Date();
    var elapsed: number = currentDate.getTime() - date.getTime(),
      diffDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    if (diffDays == 0) {
      var diffhours = Math.floor(elapsed / (1000 * 60 * 60));
      return (diffhours > 0) ? this.formatHours(diffhours) : this.formatMin(Math.floor(elapsed / (1000 * 60)));
    } else {
      var diffMonths = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30));
      if (diffMonths > 0) {
        var diffYears = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30 * 12));
        return (diffYears > 0) ? this.formatYears(diffYears) : this.formatMonths(diffMonths);
      } else {
        return this.formatDays(diffDays);
      }
    }
  }


  formatMin(diffMin: number): string {
    return (diffMin > 0) ? this.format(diffMin, (diffMin == 1) ? "minuto" : "minutos") : "Há < 1 minuto atrás";
  }

  formatHours(diffHours: number): string {
    return this.format(diffHours, (diffHours == 1) ? "hora" : "horas");
  }

  formatDays(diffDays: number): string {
    return this.format(diffDays, (diffDays == 1) ? "dia" : "dias");
  }

  formatMonths(diffMonths: number): string {
    return this.format(diffMonths, (diffMonths == 1) ? "mês" : "meses");
  }

  formatYears(diffYears: number): string {
    return this.format(diffYears, (diffYears == 1) ? "ano" : "anos");
  }

  format(time, period): string {
    return `Há ${time} ${period} atrás`
  }

}
