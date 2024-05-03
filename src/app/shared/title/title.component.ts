import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-semibold mb-5 mx-5">{{title}}</h1>
  `,
  styles: ``
})
export class TitleComponent {

  @Input({ required: true}) title!: string;

}
