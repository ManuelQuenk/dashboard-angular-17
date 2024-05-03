import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap, tap } from 'rxjs';

import { TitleComponent } from '@shared/title/title.component';

import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <shared-title [title]="titleUser()" />
  @if ( user() ) {
    <section>
      <img [srcset]="user()?.avatar" [alt]="user()!.first_name">
      <p>{{user()?.first_name}}</p>
    </section>
  }

  `,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private uService = inject(UsersService);


  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.uService.getUserById( id ) )
    )
  )

  public titleUser = computed( () => {
    if ( this.user() ) {
      return `${this.user()?.first_name} ${this.user()?.last_name}.`
    }
    return 'No se encontro nada del loco'
  })


}
