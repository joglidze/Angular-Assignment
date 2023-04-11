import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../core/interefaces/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  userId: number = 0;
  sub$ = new Subject();
  user?: User;
  loading: boolean = false;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getUser();
  }

  getUserId() {
    this.activatedRoute.params
      .pipe(takeUntil(this.sub$))
      .subscribe((params) => {
        this.userId = +params['id'];
      });
  }

  getUser() {
    this.userService
      .getSpecificUser(this.userId)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        this.user = res;
        this.loading = true;
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
