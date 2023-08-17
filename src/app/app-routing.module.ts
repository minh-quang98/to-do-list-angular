import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { CanViewDetailGuard } from './services/can-view-detail-guard.service';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: ListManagerComponent},
  { path: 'todo-item-detail/:id/view', component: TodoItemDetailComponent, canActivate: [CanViewDetailGuard]},
  { path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
