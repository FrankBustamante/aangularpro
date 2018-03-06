import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
	 task: Task = {
   title: '',
   description: '' 
  };

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

   onSubmit() {
   	console.log(this.task);
    if(this.task.title != '' && this.task.description != '') {
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
      console.log("redi");
    }
  }

}
