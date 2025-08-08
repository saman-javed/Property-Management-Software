import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-dealer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-dealer.html',
  styleUrls: ['./add-dealer.css']
})
export class AddDealerComponent {
  dealerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dealerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      cnic: ['', [Validators.pattern('^[0-9]{13}$')]],
      email: ['', [Validators.email]],
      address: [''],
      commissionRate: [5, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  onSubmit(): void {
    if (this.dealerForm.valid) {
      console.log('Dealer data submitted:', this.dealerForm.value);
      alert('Dealer saved successfully!');
      this.dealerForm.reset({ commissionRate: 5 });
    } else {
      this.dealerForm.markAllAsTouched();
    }
  }


}
