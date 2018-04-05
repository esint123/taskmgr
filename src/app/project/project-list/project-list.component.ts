import {Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../anim/router.anim';
import {listAnimation} from '../../anim/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      'id': 1,
      'name': '问题跟踪系统',
      'desc': '用于 Bug 的内部跟踪和管理',
      'coverImg': '/assets/img/covers/0.jpg',
    },
    {
      'id': 2,
      'name': '测试0022333',
      'desc': '22222',
      'coverImg': '/assets/img/covers/1.jpg',
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {

  }

  errorMessage: any;

  ngOnInit() {
  }

  /**
   * 新建
   */
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    dialogRef.afterClosed().subscribe(value => {
        console.log(value);
        if (value) {
          this.projects = [...this.projects,
            {id: 3, name: '一个新项目', desc: '这是一个新项目', coverImg: '/assets/img/covers/8.jpg'},
            {id: 4, name: '又一个新项目', desc: '这是又一个新项目', coverImg: '/assets/img/covers/9.jpg'}];
          this.cd.markForCheck();
        }
      },
      error => this.errorMessage = <any>error);
  }

  /**
   * 编辑
   */
  openUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
    dialogRef.afterClosed().subscribe(value => console.log(value),
      error => this.errorMessage = <any>error);
  }

  /**
   * 邀请
   */
  openInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  /**
   * 删除
   */
  openDeleteDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '确认删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(value => {
        console.log(value);
        if (value) {
          this.projects = this.projects.filter(p => p.id !== project.id);
          console.log(this.projects.length);
          this.cd.markForCheck();
        }
      },
      error => this.errorMessage = <any>error);
  }
}

