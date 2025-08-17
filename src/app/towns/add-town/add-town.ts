import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-town',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-town.html',
  styleUrls: ['./add-town.css']
})
export class AddTownComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      townName: ['', Validators.required],
      city: ['', Validators.required],
      totalPlots: [null, [Validators.required, Validators.min(1)]],
      mapUrl: [''],
      description: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('AddTown:', this.form.value);
      // TODO: API call
    }
  }
}
