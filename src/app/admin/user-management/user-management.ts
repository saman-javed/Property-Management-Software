import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface UserRow {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  active: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css']
})
export class UserManagementComponent {
  form: FormGroup;
  roles = ['Admin', 'Manager', 'Clerk', 'Viewer'];

  users: UserRow[] = [
    { id: 1, name: 'Ali Khan', username: 'alik', email: 'ali@example.com', role: 'Admin', active: true, createdAt: '2025-07-01' },
    { id: 2, name: 'Sara Ahmed', username: 'saraa', email: 'sara@example.com', role: 'Manager', active: true, createdAt: '2025-07-05' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Viewer', Validators.required],
      active: [true]
    });
  }

  saveUser() {
    if (this.form.invalid) return;
    const nextId = (this.users.at(-1)?.id || 0) + 1;
    this.users.push({
      id: nextId,
      createdAt: new Date().toISOString().slice(0, 10),
      ...this.form.value
    });
    this.form.reset({ role: 'Viewer', active: true });
  }

  toggleActive(u: UserRow) {
    u.active = !u.active;
  }
}
