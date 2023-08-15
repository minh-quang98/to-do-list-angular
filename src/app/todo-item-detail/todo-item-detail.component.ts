import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.scss']
})
export class TodoItemDetailComponent implements OnInit{
  id: number;
  name: string;
  status: string;
  dateStart: string;
  dateComplete: string;
  totalTime: string | number
  todoList: TodoItem[]

  constructor(private todoListService: TodoListService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.id = +this.route.snapshot.params['id'];
      this.todoList = this.todoListService.getTodoList();
      const todoItem: TodoItem = this.todoList.find(item => item.id === this.id)
      console.log(todoItem);
      this.name = todoItem.title;
      this.status = todoItem.completed ? "Done" : "Undone";
      this.dateStart = moment(todoItem.dateStart).format("DD/MM/YYYY")
      this.dateComplete = todoItem.completed ? moment(todoItem.dateCompeted).format("DD/MM/YYYY") : "None";
      this.totalTime = todoItem.completed ? `${moment.duration(moment(todoItem.dateCompeted).diff(moment(todoItem.dateStart))).as('hours').toFixed(2)} Hours` : "None";
  }

  backClick(): void {
    this.router.navigate(['']);
  }
}
