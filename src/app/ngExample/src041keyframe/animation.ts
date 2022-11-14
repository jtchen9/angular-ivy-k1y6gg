import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export let slidexyz = trigger('slide', [
  transition(':leave', [
    animate(
      '5s 1000ms',
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(20px)',
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
      ])
    ),
  ]),
]);


