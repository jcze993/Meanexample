import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {
  tasks: any = {}
  constructor(private tasksservie: TasksService) { }

  ngOnInit(): void {
    this.tasksservie.getPrivat_Tasks()
      .subscribe(
        res => {
          console.log(res);
          this.tasks = res;
        }, err => console.log(err)
      )
  }

}
