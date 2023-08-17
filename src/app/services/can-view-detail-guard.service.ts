// import { CanActivateFn } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class CanViewDetailGuardService implements CanActivateFn {

//   constructor() { }


// }

import { inject } from '@angular/core';
  import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LogInService } from './log-in.service';
import { TodoListService } from './todo-list.service';

  export const CanViewDetailGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,

    ) => {
      const loginService: LogInService = inject(LogInService)
      const todoListService: TodoListService = inject(TodoListService)

      const todoList = todoListService.getTodoList()
      const author = loginService.getUser()
      const id = +route.params['id'];
      const selectedItem = todoList.find(item => item.id === id)
      if (todoList.length > 0) {
        if (author == selectedItem.author) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }

  }
