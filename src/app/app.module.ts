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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    TodoItemDetailComponent,
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
    AppRoutingModule,
  ],
  providers: [TodoListService, StorageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
