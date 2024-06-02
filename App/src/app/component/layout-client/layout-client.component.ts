import { Component } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [HeadersComponent,RouterModule],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css'
})
export class LayoutClientComponent {

}
