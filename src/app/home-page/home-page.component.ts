import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewContainerRef,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { HomeService } from '../core/services/home.service';
import { User } from '../core/interefaces/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'Username', 'email', 'website'];
  loading: boolean = false;
  dataSource = new MatTableDataSource<User>();
  currentRowId: any = 2;
  sub$ = new Subject();

  constructor(
    private homeService: HomeService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  show = true;

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

  onDelete(element: User) {
    this.dataSource.data = this.dataSource.data.filter((e) => e !== element);

    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  remove() {
    let elements = this.elRef.nativeElement.querySelectorAll('.test');
    const lastElement = elements[elements.length - 1];
    elements.forEach((el: HTMLElement) => {
      if (el !== lastElement || el !== elements[0]) {
        this.renderer.removeChild(el.parentNode, el);
      }
    });
  }
}
