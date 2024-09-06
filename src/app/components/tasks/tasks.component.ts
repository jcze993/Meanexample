import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any = {}
  constructor(private tasksservice: TasksService) { }

  ngOnInit(): void {
    this.tasksservice.getTasks()
      .subscribe(
        res => {
          console.log(res)
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

}
