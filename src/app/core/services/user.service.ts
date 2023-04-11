import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../interefaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  getSpecificUser(id: number) {
    return this.get<User>(`/users/${id}`);
  }
}
