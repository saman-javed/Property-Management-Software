import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface PermissionItem { key: string; label: string; }

@Component({
  selector: 'app-roles-permissions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './roles-permissions.html',
  styleUrls: ['./roles-permissions.css']
})
export class RolesPermissionsComponent {
  form: FormGroup;

  permissions: PermissionItem[] = [
    { key: 'buyers.view', label: 'View Buyers' },
    { key: 'buyers.create', label: 'Create Buyer' },
    { key: 'buyers.edit', label: 'Edit Buyer' },
    { key: 'buyers.delete', label: 'Delete Buyer' },
    { key: 'dealers.view', label: 'View Dealers' },
    { key: 'dealers.create', label: 'Create Dealer' },
    { key: 'dealers.edit', label: 'Edit Dealer' },
    { key: 'dealers.delete', label: 'Delete Dealer' },
    { key: 'reports.view', label: 'View Reports' },
    { key: 'admin.users', label: 'Manage Users' },
    { key: 'admin.roles', label: 'Manage Roles' },
    { key: 'admin.audit', label: 'View Audit Logs' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      roleName: ['', Validators.required],
      permissions: this.fb.array(this.permissions.map(() => new FormControl(false)))
    });
  }

  get permArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  // New getter with explicit FormControl[] typing
  get permControls(): FormControl[] {
    return this.permArray.controls as FormControl[];
  }

  selectAll(val: boolean) {
    this.permArray.controls.forEach(c => c.setValue(val));
  }

  saveRole() {
    if (this.form.invalid) return;
    const selected = this.permissions
      .filter((_, i) => this.permArray.value[i])
      .map(p => p.key);

    console.log('Role save:', { roleName: this.form.value.roleName, permissions: selected });
    // TODO: send to API
    this.form.reset({ roleName: '', permissions: this.permissions.map(() => false) });
  }
}
