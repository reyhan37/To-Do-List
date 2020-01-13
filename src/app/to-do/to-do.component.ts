import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent {
  tasks = tasks;

  addTask(newTask) {
    tasks.push({task: newTask, completed: false});
  }

  removeTask(disposableTask) {
    let index = tasks.indexOf(disposableTask);
    tasks.splice(index, 1);
  }

  removeCompletedTask(task) {
    task.completed = true
  }
    
  ngOnInit() {
  }

}

interface Todo {
  task: string;
  completed: boolean;
}


