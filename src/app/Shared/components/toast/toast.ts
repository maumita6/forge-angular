import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

// Define a strict, explicit type for your status variants
export type InputStatus = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.html',
  styleUrls: ['./toast.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ToastComponent {
  readonly statusType = input<InputStatus>('info');
  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly dismissible = input<boolean>(true);

  readonly closed = output<void>();



  close(): void {
    this.closed.emit();
  }
}
