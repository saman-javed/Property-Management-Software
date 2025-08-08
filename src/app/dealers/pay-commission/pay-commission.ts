import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay-commission',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pay-commission.html',
  styleUrls: ['./pay-commission.css']
})
export class PayCommissionComponent {
  form: FormGroup;
  paymentMethods = ['Cash', 'Bank Transfer', 'Cheque'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dealerId: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      date: [null, Validators.required],
      paymentMethod: ['Cash', Validators.required],
      referenceNo: [''],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Pay Commission:', this.form.value);
    }
  }
}
