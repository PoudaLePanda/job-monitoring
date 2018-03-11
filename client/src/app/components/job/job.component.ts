import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobComponent {
  jobs$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private data: DataService, private auth: AuthService) {
    // get jobs from data service
    this.jobs$ = data.jobs$()
      // our data is paginated, so map to .data
      .map(m => m.data)
      // reverse the jobs array, to have the most recent job at the end
      // necessary because we get a descendingly sorted array from the data service
      .map(m => m.reverse());

    // get users from data service
    this.users$ = data.users$()
      // our data is paginated, so map to .data
      .map(u => u.data);
  }

  sendJob(job: string) {
    this.data.sendJob(job);
  }

  logOut() {
    this.auth.logOut();
  }
}
