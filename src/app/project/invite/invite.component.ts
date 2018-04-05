import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: '张三',
    },
    {
      id: 1,
      name: '李四',
    },
    {
      id: 1,
      name: '王五',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  displayUser(user: { id: string; name: string }) {
    return user ? user.name : '';
  }
}
