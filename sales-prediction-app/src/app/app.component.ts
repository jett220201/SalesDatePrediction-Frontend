import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomersComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sales-prediction-app';
}
