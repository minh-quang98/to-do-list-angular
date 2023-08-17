import { Component, OnInit } from '@angular/core';
import { LogInService } from '../services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{
  username: string;
  password: string;

  constructor(private logInService: LogInService, private router: Router) {

  }

  ngOnInit(): void {

  }

  submit(): void {
    this.logInService.saveUser(this.username)
    this.router.navigate([""]);
  }
}
