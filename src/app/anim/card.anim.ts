import {trigger, state, transition, style, animate} from '@angular/animations';

export const cardAnim = trigger('project-card', [
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style({transform: 'scale(1.07)', 'box-shadow': '3px 3px 4px 6px #ccc'})),
  transition('out=>hover', animate('200ms ease-in')),
  transition('hover=>out', animate('200ms ease-out'))
]);
