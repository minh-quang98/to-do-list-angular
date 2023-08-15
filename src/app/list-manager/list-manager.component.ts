import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from './../services/todo-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
  providers: [MessageService]
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService, private messageService: MessageService) {

  }

  ngOnInit(): void {
      this.todoList = this.todoListService.getTodoList()
  }

  addItem(title: string): void {
    this.todoListService.addItem({ id: this.todoList.length + 1, title, dateStart: new Date() });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Success' });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Remove Success' });
  }

  updateItem(item: TodoItem, changes): void {
    this.todoListService.updateItem(item, changes)
  }
}
