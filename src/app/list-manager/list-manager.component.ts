import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from './../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {

  }

  ngOnInit(): void {
      this.todoList = this.todoListService.getTodoList()
  }

  addItem(title: string): void {
    const dateStart = new Date()
    this.todoListService.addItem({ title, dateStart: dateStart });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes): void {
    this.todoListService.updateItem(item, changes)
  }
}
