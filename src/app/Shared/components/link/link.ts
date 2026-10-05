import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-link',
  styleUrl: './link.css',
  templateUrl: './link.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Link {

  href = input<string | any>('');
  label = input<string>('');

}
