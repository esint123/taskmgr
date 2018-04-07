import {Component, OnInit, HostListener, Output, EventEmitter} from '@angular/core';
import {slideToRight} from '../../anim/router.anim';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  @Output() quickTask = new EventEmitter<string>();
  desc: string;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0 || !this.desc.trim()) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }

  /*  onSubmit({value, valid}, ev: Event) {
      ev.preventDefault();
      console.log(JSON.stringify(value));
      console.log(JSON.stringify(valid));
    }*/
}
