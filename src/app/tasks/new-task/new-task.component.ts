import { Component, Input, Output, EventEmitter, inject,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
   @Input({required:true}) userId!: string;
   @Output() cancel = new EventEmitter();
   enteredTitle = ''
   enteredSummary = ''
   enteredDate = ''
   private tasksService = inject(TasksService)

  onCancel()
  {
    this.cancel.emit();
    console.log("ugasi ga")
  }

  onSubmit(){
    this.tasksService.addTask(
    {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.cancel.emit()
  }
}