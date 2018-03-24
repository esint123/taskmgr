import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：吃晚餐',
          completed: true,
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
          desc: '任务二：完成作业',
          completed: false,
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

  constructor() {
  }

  ngOnInit() {
  }

}
