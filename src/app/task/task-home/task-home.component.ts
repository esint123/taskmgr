import {Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {slideToRight} from '../../anim/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：吃晚餐--吃晚餐',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：完成作业--完成作业-完成作业',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：代码审核',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务四：制定项目计划',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '赵六',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  handleAddTask() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}, width: '400px'});
  }

  handleMoveTask() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {list: this.lists}});
  }

  handleUpdateTask(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  handleDeleteTask() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务', content: '确认删除该任务吗？'}});
    dialogRef.afterClosed().subscribe(value => console.log(value));
  }

  handleUpdateTaskList() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(value => console.log(value));
  }

  handleNewTaskList() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新增列表名称'}});
    dialogRef.afterClosed().subscribe(value => console.log(value));
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('task-item');
        break;
      case 'task-list':
        console.log('task-list');
        break;
      default:
        break;
    }
  }
}
