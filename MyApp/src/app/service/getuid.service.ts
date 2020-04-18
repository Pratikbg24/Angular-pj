import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetuidService {

  private subject = new Subject<any>();

  get(uid: any) {
    this.subject.next({ user_id: uid });
}
  getuid(): Observable<any> {
    return this.subject.asObservable();
}
}
