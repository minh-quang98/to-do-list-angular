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
  status: boolean;
  dateStart: string | Date;
  dateComplete: string | Date;
  totalTime: string | number
  todoList: TodoItem[]

  constructor(private todoListService: TodoListService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.id = +this.route.snapshot.params['id'];
      this.todoList = this.todoListService.getTodoList();
      const todoItem: TodoItem = this.todoList.find(item => item.id === this.id)
      this.name = todoItem.title;
      this.status = todoItem.completed;
      this.dateStart = todoItem.dateStart
      this.dateComplete = todoItem.dateCompeted;
      this.totalTime = todoItem.completed ? this.sumaryTotalTime(todoItem.dateStart, todoItem.dateCompeted) : "None";
  }

  sumaryTotalTime(start: Date, end: Date): any {
    const rawTime = parseFloat(moment.duration(moment(end).diff(moment(start))).as('minutes').toFixed(0))
    if (rawTime < 60) {
      return `${rawTime} Minutes`
    } else if (rawTime % 60 === 0) {
      return `${rawTime} Hours`
    } else {
      const numberHours = (rawTime - (rawTime % 60)) / 60
      return `${numberHours} Hours ${rawTime - numberHours * 60} Minutes`
    }
  }

  backClick(): void {
    this.router.navigate(['']);
  }
}
