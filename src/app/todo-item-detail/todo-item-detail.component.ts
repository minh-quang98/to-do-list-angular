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
      this.totalTime = todoItem.completed ? this.convertDateTime(todoItem.dateStart, todoItem.dateCompeted) : "None";
  }

  convertDateTime(start: Date, end: Date): any {
    const rawTime = parseFloat(moment.duration(moment(end).diff(moment(start))).as('hours').toFixed(2))
    if (rawTime < 1) {
      return `${(rawTime * 60).toFixed(0)} Minutes`
    } else {
      const numberHours = rawTime.toFixed(0)
      return `${numberHours} Hours ${((rawTime - parseInt(numberHours)) * 60).toFixed(0)} Minutes`
    }
  }

  backClick(): void {
    this.router.navigate(['']);
  }
}
