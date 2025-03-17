import { Component, Input, Output, EventEmitter, inject} from '@angular/core';
import {Task} from './task.model'
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input({required:true}) task!: Task;

   private tasksService = inject(TasksService)

   onSelectTask(){
    this.tasksService.removeTask(this.task.id);
    console.log("pritisnut task" + this.task.id)
  }
}