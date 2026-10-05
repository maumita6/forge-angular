import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../link/link'; // reuse your link component

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Link],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly userName = signal('John A');
}
