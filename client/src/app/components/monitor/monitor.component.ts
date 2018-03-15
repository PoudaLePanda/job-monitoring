import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { visibilityChanged } from '../../router.animations';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  animations: [visibilityChanged],
  host: { '[@visibilityChanged]': '' }
})
export class MonitorComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }


  logOut() {
    this.authService.logOut();
  }
}
