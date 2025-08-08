import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Added
import { ReactiveFormsModule } from '@angular/forms';  // ✅ Added

@Component({
  selector: 'app-add-buyer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Now works
  templateUrl: './add-buyer.html',
  styleUrls: ['./add-buyer.css']
})
export class AddBuyerComponent {
  buyerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buyerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      cnic: ['', [Validators.pattern('^[0-9]{13}$')]],
      address: [''],
      townId: [null, Validators.required],
      fileNo: ['']
    });
  }

  onSubmit() {
    if (this.buyerForm.valid) {
      console.log('Buyer Data:', this.buyerForm.value);
    }
  }
}
