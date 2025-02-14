import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./utils/header/header.component";
import { LoginComponent } from "./authentication/login/login.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./pages/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tenancy-system';
}
