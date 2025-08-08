import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-receive-installment',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],  
  templateUrl: './receive-installment.html',
  styleUrls: ['./receive-installment.css']
})
export class ReceiveInstallmentComponent {
  installmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.installmentForm = this.fb.group({
      buyerId: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      mode: ['Cash', Validators.required],
      remarks: ['']
    });
  }

  onSubmit() {
    if (this.installmentForm.valid) {
      console.log(this.installmentForm.value);
      // You can add your submission logic here (e.g., send to backend)
    } else {
      console.warn('Form is invalid');
    }
  }
}
