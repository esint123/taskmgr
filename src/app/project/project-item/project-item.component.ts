import {Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {cardAnim} from '../../anim/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onUpdate = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  /**
   * 上一级绑定动画触发器
   * @type {string}
   */
  @HostBinding('@project-card') cardState = 'out';

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target) {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  ononUpdateClick() {
    this.onUpdate.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }
}
