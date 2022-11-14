import { trigger, transition, style, animate } from "@angular/animations";

export let slidexyz = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(100px)' }),
    animate(2000),
  ]),
  transition(':leave', [
    animate('2s 1000ms ease-in', style({ transform: 'translateX(50%)' })),
  ]),
]);