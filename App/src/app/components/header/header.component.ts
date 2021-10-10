import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter();
  currentUserSub: Subscription;
  currentUser: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUserSub = this.authService.currentUser$.subscribe((user) => {
      console.log(user);
      this.currentUser = user;
    });
    this.authService.getCurrentUser();
  }

  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onLogoutUser() {
    this.authService.logoutUser();
  }
}
