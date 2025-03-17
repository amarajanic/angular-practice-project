import { Injectable } from '@angular/core';
import {dummyTasks} from './task/dummy-tasks'
import { NewTaskData } from './task/task.model';
import { JsonPipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class TasksService{

    private tasks = dummyTasks;

constructor(){
    const tasks = localStorage.getItem("tasks");

    if (tasks){
        this.tasks = JSON.parse(tasks);
    }
}
getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
}

addTask(taskData:NewTaskData, userId:string){
    this.tasks.push({
        id: new Date().getTime().toString(),
        title: taskData.title,
        userId: userId,
        summary: taskData.summary,
        dueDate: taskData.date
       })
       this.saveTasks();
}

removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
}

private saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
}
}