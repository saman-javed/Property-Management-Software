import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-installment-alerts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './installment-alerts.html',
  styleUrls: ['./installment-alerts.css']
})
export class InstallmentAlertsComponent {
  alertForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alertForm = this.fb.group({
      buyerIds: [''],
      template: ['Your installment is due.'],
      deliveryMode: ['SMS']
    });
  }

  onSubmit() {
    console.log(this.alertForm.value);
  }
}
