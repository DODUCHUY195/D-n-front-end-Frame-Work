import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { HeadersAdminComponent } from '../headers-admin/headers-admin.component';
import { FootersAdminComponent } from '../footers-admin/footers-admin.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterModule,DashboardComponent,HeadersAdminComponent,FootersAdminComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

}
