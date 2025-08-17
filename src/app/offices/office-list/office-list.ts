import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface OfficeRow {
  id: number;
  officeName: string;
  location: string;
  phone?: string;
  manager?: string;
}

@Component({
  selector: 'app-office-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './office-list.html',
  styleUrls: ['./office-list.css']
})
export class OfficeListComponent {
  searchForm: FormGroup;

  offices: OfficeRow[] = [
    { id: 1, officeName: 'Head Office', location: 'Karachi', phone: '021-1234567', manager: 'Ali Khan' },
    { id: 2, officeName: 'City Office', location: 'Lahore', phone: '042-9876543', manager: 'Sara Ahmed' }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  onSearch() {
    console.log('Search:', this.searchForm.value.query);
    // TODO: filter or API call
  }
}
