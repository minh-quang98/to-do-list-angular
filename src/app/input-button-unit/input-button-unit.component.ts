import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit{
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = "Hello world"

  constructor() {
    // this.changeTitle("Show me the money")
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.changeTitle('This is not the title you are looking for');
    // }, 3000);
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle)
  }
}
