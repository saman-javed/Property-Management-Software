import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface LogRow {
  date: string;
  user: string;
  action: string;
  details: string;
}

@Component({
  selector: 'app-user-activity-log',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-activity-log.html',
  styleUrls: ['./user-activity-log.css']
})
export class UserActivityLogComponent {
  form: FormGroup;
  actions = ['Login', 'Logout', 'Create', 'Update', 'Delete', 'Permission Change'];

  logs: LogRow[] = [
    { date: '2025-08-05 10:21', user: 'alik', action: 'Login', details: 'Signed in from web' },
    { date: '2025-08-05 10:30', user: 'saraa', action: 'Create', details: 'Added buyer #1023' },
    { date: '2025-08-05 11:10', user: 'alik', action: 'Permission Change', details: 'Role updated: Manager' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: [''],
      action: [''],
      from: [''],
      to: ['']
    });
  }

  applyFilters() {
    console.log('Log filters:', this.form.value);
    // TODO: call API or filter locally
  }
}
