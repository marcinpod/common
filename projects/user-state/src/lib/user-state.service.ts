import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private _user: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  public get user(): string | null {
    return this._user.value;
  }

  public get user$(): Observable<string | null> {
    return this._user.asObservable();
  }

  public set user(user: string | null) {
    this._user.next(user)
  }

}
