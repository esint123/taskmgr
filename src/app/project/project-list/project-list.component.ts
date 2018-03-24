import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'name': '问题跟踪系统',
      'desc': '用于 Bug 的内部跟踪和管理',
      'coverImg': '/assets/img/covers/0.jpg',
    },
    {
      'name': '测试0022333',
      'desc': '22222',
      'coverImg': '/assets/img/covers/1.jpg',
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  errorMessage: any;

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
    dialogRef.afterClosed().subscribe(value => console.log(value),
      error => this.errorMessage = <any>error);
  }

  Dialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }
}

