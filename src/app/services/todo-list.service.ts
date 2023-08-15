import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {id: 1, title: 'install NodeJS'},
  {id: 2, title: 'install Angular CLI'},
  {id: 3, title: 'create new app'},
  {id: 4, title: 'serve app'},
  {id: 5, title: 'develop app'},
  {id: 6, title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList
  }

  private todoList: TodoItem[] = [
    {id: 1, title: 'install NodeJS'},
    {id: 2, title: 'install Angular CLI'},
    {id: 3, title: 'create new app'},
    {id: 4, title: 'serve app'},
    {id: 5, title: 'develop app'},
    {id: 6, title: 'deploy app'},
  ]

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
