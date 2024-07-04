import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './tasks.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required:true}) userId !: string;
  @Input({required:true}) name !:string;

  isNewTask = false;

  constructor(private taskService: TasksService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTask(){
    this.isNewTask = true;
  }

  onCloseAddTask(){
    this.isNewTask = false;
  }

}
