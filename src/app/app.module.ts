import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule }    from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { MessageService } from 'primeng/api';
import { appReducer } from 'src/store';
import { CustomDatePipe } from 'src/share/customPipe/custom-date-pipe';
import { CustomeStatusPipe } from 'src/share/customPipe/custom-status-pipe';
import { LogInComponent } from './log-in/log-in.component';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    TodoItemDetailComponent,
    CustomDatePipe,
    CustomeStatusPipe,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    PanelModule,
    CardModule,
    PasswordModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [TodoListService, StorageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
