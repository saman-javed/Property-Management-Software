import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface TownRow {
  id: number;
  townName: string;
  city: string;
  totalPlots: number;
  active: boolean;
}

@Component({
  selector: 'app-town-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './town-list.html',
  styleUrls: ['./town-list.css']
})
export class TownListComponent {
  searchForm: FormGroup;
  towns: TownRow[] = [
    { id: 1, townName: 'Green Valley', city: 'Karachi', totalPlots: 500, active: true },
    { id: 2, townName: 'Sky Gardens', city: 'Lahore', totalPlots: 300, active: true }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
      city: ['']
    });
  }

  onSearch() {
    console.log('Town search:', this.searchForm.value);
    // TODO: filter or API call
  }

  toggleActive(t: TownRow) {
    t.active = !t.active;
  }
}
