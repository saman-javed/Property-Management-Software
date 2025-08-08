import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buyer-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './buyer-list.html',
  styleUrls: ['./buyer-list.css']
})
export class BuyerListComponent {
  searchForm: FormGroup;
  buyers = [
    { name: 'Ali Khan', phone: '03001234567', town: 'Town A' },
    { name: 'Sara Ahmed', phone: '03007654321', town: 'Town B' }
  ];
  filteredBuyers = [...this.buyers]; 

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({ searchTerm: [''] });
  }

  onSearch() {
    const term = this.searchForm.value.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredBuyers = [...this.buyers]; 
    } else {
      this.filteredBuyers = this.buyers.filter(buyer =>
        buyer.name.toLowerCase().includes(term) ||
        buyer.phone.includes(term) ||
        buyer.town.toLowerCase().includes(term)
      );
    }
  }
}
