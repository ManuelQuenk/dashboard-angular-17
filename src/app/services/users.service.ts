import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, map } from 'rxjs';

import type { User, UserResponse, UsersResponse,  } from '@interfaces/user-response';

interface State {
  users   : User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient)

  #state = signal<State>({
    loading: true,
    users  : [],
  });


  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {
    this.http.get<UsersResponse>(`https://reqres.in/api/users`)
    .pipe(delay(1000))
    .subscribe( res => {
      // Updates the property state
      this.#state.set({
        loading:false,
        users: res.data,
        // users: [],
      })
     })
  }

  getUserById( id:string ) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
    .pipe(
      map( res => res.data)
    )
  }

  // getUserById( id: string ) {
  //   return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
  //     .pipe(
  //       delay(1500),
  //       map( resp => resp.data )
  //     )

  // }

}


// Other solutions i found but not the one shown in the course, though the one being used is better
// in terms of coding, because as a computed signal it can only read its value but not change it
// by accident in other components

// public userList = signal<User[]>([])

// Sets the user list new values from the response

// this.userList.set(res.data)

// console.log(this.userList())
