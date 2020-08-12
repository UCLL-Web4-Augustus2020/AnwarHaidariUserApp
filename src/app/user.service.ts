import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {User} from './user';

import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:8080/Controller?action=SendUsers';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  setStatus(user: User): void {
    let body = new HttpParams().append('newStatus', user.status).append('angID', user.userId);

    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    // Je moet userUrl gebruiken
    //  + '&newStatus=' + user.status + '&angID=' + user.userId ---> = niet nodig ?
    this.http.post<any>(this.userUrl, body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err));
  }

}
