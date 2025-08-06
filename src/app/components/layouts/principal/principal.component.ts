import { Component } from '@angular/core';
import { NavbarComponent } from "../../commons/navbar/navbar.component";
import { SidebarComponent } from '../../commons/sidebar/sidebar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
