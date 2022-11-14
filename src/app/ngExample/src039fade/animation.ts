import { trigger, transition, style, animate } from "@angular/animations";

export let fadexyz = trigger('fade', [
  transition('void=>*', [
    style({ backgroundColor: 'yellow', opacity: 0 }),
    animate(2000, style({ backgroundColor: 'blue', opacity: 1 })),
  ]),
  transition('*=>void', [
    style({ backgroundColor: 'blue', opacity: 1 }),
    animate(5000, style({ backgroundColor: 'yellow', opacity: 0 })),
  ]),
]);