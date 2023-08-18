import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from './../services/todo-list.service';
import { MessageService } from 'primeng/api';
import { LogInService } from '../services/log-in.service';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
  providers: [MessageService]
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  author: string;

  constructor(
    private todoListService: TodoListService,
    private messageService: MessageService,
    private logInService: LogInService,
    private router: Router,
    private configService: ConfigService
    ) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList()
    this.author = this.logInService.getUser()
    this.getData()
  }

  getData(): void {
    this.configService.getData('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      result => {
        console.log("check>>result", result);
      },
      error => {
        console.log("check>>error", error);
      }
    )
  }

  addItem(title: string): void {
    this.todoListService.addItem({ id: this.todoList.length + 1, title, dateStart: new Date(), author: this.author });
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Success' });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Remove Success' });
  }

  updateItem(item: TodoItem, changes, save: boolean): void {
    this.todoListService.updateItem(item, changes)
    if (save) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Update Success' });
    }
  }

  logOut(): void {
    this.router.navigate(["login"]);
  }
}
