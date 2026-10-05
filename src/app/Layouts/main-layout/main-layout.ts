import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../Shared/components/layout/header/header';
import { Footer } from '../../Shared/components/layout/footer/footer';
import { Link } from '../../Shared/components/link/link';

@Component({
  imports: [RouterOutlet, Header, Link],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout { }
