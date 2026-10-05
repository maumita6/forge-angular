import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatStateService } from '../../../Features/chat/chat-state';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-chat-input',
  styleUrl: './chat-input.css',
  templateUrl: './chat-input.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ChatInput {
  message = signal('');

  public chatState = inject(ChatStateService);

  private readonly router = inject(Router);


  // action triggered when user clicks send button
  sendMessage(): void {
    const text = this.chatState.currentPrompt().trim();

    if (!text) {
      return;
    }

    const conversationID = this.chatState.createNewConversation(text);
    console.log(conversationID);

    this.router.navigate(['/chat', conversationID]);
  }

  get MSG() {
    return this.message();
  }

  set MSG(val: string) {
    this.message.set(val);
  }



}
