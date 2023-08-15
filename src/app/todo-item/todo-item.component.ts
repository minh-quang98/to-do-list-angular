import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  removeItem(): void {
    this.remove.emit(this.item)
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed, dateCompeted: !this.item.completed ? new Date() : null},
      save: true
    })
  }

  editMode(): void {
    this.update.emit({
      item: this.item,
      changes: {isEdit: !this.item.isEdit},
      save: false
    })
  }

  saveItem(value): void {
    this.update.emit({
      item: this.item,
      changes: {title: value.nativeElement.value, isEdit: false},
      save: true
    })
  }

  viewMode(id: number): void {
    this.router.navigate([`todo-item-detail/${id}/view`]);
  }
}
