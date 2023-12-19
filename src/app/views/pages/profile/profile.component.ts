import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,
    ButtonModule, CardModule, FormModule, GridModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
