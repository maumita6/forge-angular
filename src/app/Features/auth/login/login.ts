import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Button } from '../../../Shared/components/button/button';
import { UserInput } from '../../../Shared/components/user-input/user-input';
import { Link } from '../../../Shared/components/link/link';


@Component({
  imports: [Button, UserInput, Link],
  selector: 'app-login',
  standalone: true,
  styleUrl: './login.css',
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Login {

  private readonly router = inject(Router);

  signIn(): void {
    this.router.navigate(['/dashboard']);
  }

}
