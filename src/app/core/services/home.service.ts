import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { User } from '../interefaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  getUsers(): Observable<User[]> {
    return this.get<User[]>('/users');
  }
}
