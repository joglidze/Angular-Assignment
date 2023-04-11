import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../core/services/home.service';
import { User } from '../core/interefaces/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'Username', 'email', 'website'];
  loading: boolean = false;
  dataSource = new MatTableDataSource<User>();
  test: boolean = true;
  dataSubject$ = new Subject<User[]>();
  sub$ = new Subject();

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();

    this.dataSubject$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  getAllUsers() {
    this.homeService
      .getUsers()
      .pipe(takeUntil(this.sub$))
      .subscribe((users) => {
        this.dataSource.data = users;
        this.loading = true;
      });
  }

  tarUser(id: number) {
    this.router.navigate(['user', id]);
  }

  onDelete(element: any) {
    const target = this.dataSource.data.indexOf(element);
    if (target !== -1) {
      this.dataSource.data.splice(target, 1);
      console.log(this.dataSource.data);
      this.dataSubject$.next(this.dataSource.data);
      this.dataSubject$.subscribe((res) => {
        this.dataSource.data = res;
      });
    }
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
