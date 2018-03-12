import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
  jobs$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.jobs$ = dataService.jobs$()
      .map(j => j.data)
      .map(j => j.reverse());
    this.users$ = dataService.users$()
      .map(u => u.data);
  }

  // sendJob(job: any) {
  //   this.dataService.sendJob(job);
  // }

  logOut() {
    this.authService.logOut();
  }
}