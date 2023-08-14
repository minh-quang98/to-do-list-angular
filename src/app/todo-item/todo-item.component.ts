import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('updateElementRef') updateElementRef: ElementRef;

  constructor() {

  }

  ngOnInit(): void {

  }

  removeItem(): void {
    this.remove.emit(this.item)
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    })
  }

  editMode(): void {
    this.update.emit({
      item: this.item,
      changes: {isEdit: !this.item.isEdit}
    })
  }

  saveItem(value): void {
    this.update.emit({
      item: value,
      changes: {isEdit: false}
    })
  }

}
