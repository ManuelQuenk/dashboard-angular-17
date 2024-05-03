import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
  styles: ``
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass!: string;

  constructor() {
    // no deberia hacer esto en la vida real pero por cuestiones 100% estudiantiles, si
    const tiempo = Date.now()
    while(Date.now() - tiempo < 3000) {}

  }

}
