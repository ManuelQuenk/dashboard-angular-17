import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
  <shared-title [title]='currentFramework()' />
  <hr>
  <pre> {{frameworkAsSignal() | json}} </pre>
  <hr>
  <pre> {{frameworkAsProperty | json}} </pre>


  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(() => this.frameworkAsSignal().name)

  public frameworkAsSignal = signal({
    name: 'Angular',
    realeaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular',
    realeaseDate: 2016,
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))
    }, 3000);
  }

}
