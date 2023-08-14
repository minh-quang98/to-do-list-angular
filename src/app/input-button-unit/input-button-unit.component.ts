import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit{
  title = "Hello world"

  constructor() {
    this.changeTitle("Show me the money")
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.changeTitle('This is not the title you are looking for');
    }, 3000);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
