import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.html',
  styleUrls: ['./add-buyer.css']
})
export class AddBuyerComponent {
  buyerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buyerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      cnic: [''],
      address: [''],
      townId: [null],
      fileNo: ['']
    });
  }

  onSubmit() {
    if (this.buyerForm.valid) {
      console.log(this.buyerForm.value);
    }
  }
}
