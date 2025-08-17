import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Dealer {
  name: string; phone: string; cnic?: string; commissionRate: number; totalCommission?: number;
}

@Component({
  selector: 'app-dealer-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dealer-list.html',
  styleUrls: ['./dealer-list.css']
})
export class DealerListComponent {
  searchForm: FormGroup;
  dealers: Dealer[] = [
    { name: 'Ahmad Raza', phone: '03001234567', cnic: '3520212345678', commissionRate: 5, totalCommission: 82000 },
    { name: 'Sana Sheikh', phone: '03009876543', cnic: '4220112345678', commissionRate: 7, totalCommission: 103000 }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({ search: [''] });
  }

  onSearch() {
    const q = (this.searchForm.value.search || '').toLowerCase();
    console.log('Search query:', q);
    // Add filter/API call here
  }
}
