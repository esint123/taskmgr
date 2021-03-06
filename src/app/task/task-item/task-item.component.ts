import {Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {itemAnim} from '../../anim/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() taskClick = new EventEmitter<void>();
  avatar: string;
  widerPriority = 'in';

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target) {
    this.widerPriority = 'in';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
