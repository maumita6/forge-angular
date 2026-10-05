import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal, effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatStateService } from '../../../Features/chat/chat-state';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { Sidebar } from '../sidebar/sidebar';


@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  standalone: true,
  selector: 'chat-container',
  styleUrl: './chat.css',
  templateUrl: './chat.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChatContainer {
  protected chatState = inject(ChatStateService);

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.chatState.activeConversationId.set(this.id());
    })
  }

  sendReply(): void {
    const text = this.chatState.currentPrompt().trim();
    if (text) {
      this.chatState.sendMessageToActive(text);
    }
  }

}
