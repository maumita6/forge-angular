import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Button {

  readonly variant = input<ButtonVariant>('primary');
  readonly label = input<string>('');
  readonly size = input<ButtonSize>('large');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly type = input<ButtonType>('button');
}
