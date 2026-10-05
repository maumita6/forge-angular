import { Component, signal, inject, ChangeDetectionStrategy, computed, input, output } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Button } from '../../Shared/components/button/button';
import { Cards } from '../../Shared/components/cards/cards';
import { ChatInput } from '../../Shared/components/chat-input/chat-input';
import { ChatStateService } from '../chat/chat-state';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Cards, ChatInput, FormsModule],
  standalone: true,
  selector: 'app-landing',
  styleUrl: './landing.css',
  templateUrl: './landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Landing {
  prompts = signal<string[]>([
    'Generative AI or Robotics',
    'Key Topics in Artificial Intelligence',
    'Explain Reactive machines to a beginner',
    'Explore 100+ Artificial Intelligence topics'
  ]);

  private chatStat = inject(ChatStateService);

  showToast = true;
  private readonly router = inject(Router);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.setTimeout(() => {
      this.showToast = false;
    }, 5000);

  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

  selectPrompt(item: string): void {
    this.chatStat.setprompt(item);
  }

}
