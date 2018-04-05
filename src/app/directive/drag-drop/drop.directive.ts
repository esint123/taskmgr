import {Directive, Input, HostListener, ElementRef, Renderer2} from '@angular/core';
import {DragDropService} from '../drag-drop.service';

@Directive({
  selector: '[app-droppable]'
})
export class DropDirective {
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private data$;

  constructor(private el: ElementRef,
              private rd: Renderer2,
              private service: DragDropService) {
    this.data$ = this.service.getDragData().take(1);
  }

  /**
   * 拖放进入，也就是鼠标拖放对象进入拖放区域
   * @param {Event} ev
   */
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  /**
   * 拖放对象悬浮于拖放区域，在拖放区域内移动时多次触发
   * @param {Event} ev
   */
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {

  }

  /**
   * 离开拖放区域
   * @param {Event} ev
   */
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  /**
   * 拖放完成，也就是鼠标拖入对象并在拖放区域释放
   * @param {Event} ev
   */
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
}
