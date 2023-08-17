import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customdatepipe' })
export class CustomDatePipe implements PipeTransform {
  transform(date: Date | string, format: string = 'dd/MM/yyyy'): string {
    if (date) {
      date = new Date(date);
      return new DatePipe('en-US').transform(date, format)
    }
    return "None"
  }
}
