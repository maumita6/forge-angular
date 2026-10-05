import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.html',
  styleUrls: ['./user-input.css']
})
export class UserInput {
  // Signal Inputs

  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text');
  disabled = input<string | any>(false);
  value = input<string>('');
  error = input<string>('');
  readonlyVal = input<string>('');
  icon = input<any>('');


  inputId = input<string>(`input-${Math.random().toString(36).substring(2, 9)}`);

  valueChange = output<string>();


  onInputChange(event: Event): void {
    const targetVal = event.target as HTMLInputElement;
    this.valueChange.emit(targetVal.value);
  }


}
