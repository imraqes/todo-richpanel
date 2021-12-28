import { Component } from '@angular/core';
import { TASKS, Task } from './tasks';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks: Task[];
  public done: Task[];
  public view: 'add' | 'list';

  constructor() {
    this.done = [];
    this.tasks = TASKS.map(task => new Task(task));
    this.view = 'list';
  }

  addTask(): void {
    this.view = 'add';
  }

  close(): void {
    this.view = 'list';
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  started($event: any): void {
    console.log('started');
  }
}
