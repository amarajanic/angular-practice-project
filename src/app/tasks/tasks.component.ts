import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import {TasksService} from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({required:true}) userId!: string;
  @Input ({required:true}) name!: string;

  selectedTaskId?: string[];
  addNewTaskValue?: boolean = false

  private tasksService: TasksService;

  constructor(tasksService: TasksService){
   this.tasksService = tasksService;
  }
   
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onSelectTask(id: string) {
    this.selectedTaskId = this.selectedTaskId ?? [];
    this.selectedTaskId.push(id);
  }

  toggleNewTask()
  {
    console.log(this.addNewTaskValue);
    this.addNewTaskValue = true
  }

  closeNewTaskDialog()
  {
    this.addNewTaskValue = false;
    console.log(this.addNewTaskValue);
  }

  onCancel(){
    this.closeNewTaskDialog()
  }

  onAddTask(){
   this.addNewTaskValue = false;
  }
}
