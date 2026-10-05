import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';


@Component({
  imports: [],
  selector: 'app-user-password',
  styleUrl: './user-password.css',
  templateUrl: './user-password.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserPassword {

  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('password');
  disabled = input<string | any>(false);
  value = input<string>('');
  error = input<string>('');
  readonlyVal = input<string>('');

  valueChange = output<string>();

  onPasswordChange(event: Event): void {
    var target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

}
