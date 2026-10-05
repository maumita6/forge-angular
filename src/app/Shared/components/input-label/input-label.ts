import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';


@Component({
  imports: [],
  selector: 'app-input-label',
  styleUrl: './input-label.css',
  templateUrl: './input-label.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class InputLabel {

  label = input<string | any>('');


}
