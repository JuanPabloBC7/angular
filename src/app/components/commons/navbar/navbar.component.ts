import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items1: MenuItem[] | undefined;

  ngOnInit() {
    this.items1 = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        badge: '3',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        url: 'https://jpbalan7.onrender.com/#contact-us'
      },
    ]
  }
}