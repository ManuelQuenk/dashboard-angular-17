import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `

  <shared-title title="View transitions eaa"/>
  <section class="flex justify-end" >

    <div class="fixed bottom-16 right-16 rounded-3xl bg-green-900 w-60 h-60" style="view-transition-name: profileInfo;">

    </div>

    <img
     srcset="https://picsum.photos/id/237/200/300"
     alt="doginho"
     width="200"
     height="300"
     style="view-transition-name: profilePicture;"
    />
  </section>


  `
})
export default class ViewTransitionComponent {

}
