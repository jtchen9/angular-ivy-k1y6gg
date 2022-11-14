import {
  style,
  animate,
  keyframes,
  animation,
  trigger,
  transition,
  useAnimation,
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '0.5s 1s',
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
  )
);

export let slidexyz = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(100px)' }),
    animate(500),
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]);

export let fadeInAnimation = animation(
  [
    style({ backgroundColor: 'yellow', opacity: 0 }),
    animate(
      '{{ duration}} {{easing}}',
      style({ backgroundColor: 'blue', opacity: 1 })
    ),
  ],
  {
    params: {
      duration: '20s',
      easing: 'ease-out',
    },
  }
);

export let fadexyz = trigger('fade', [
  transition('void=>*', useAnimation(fadeInAnimation)),
  transition('*=>void', [
    style({ backgroundColor: 'blue', opacity: 1 }),
    animate(5000),
  ]),
]);
