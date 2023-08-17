import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customstatuspipe'})
export class CustomeStatusPipe implements PipeTransform {
  transform(status: boolean): string {
    if (status) {
      return "Hoàn Thành";
    }
    return "Chưa Hoàn Thành";
  }
}
