import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-chat-bubble',
  styleUrl: './chat-bubble.css',
  templateUrl: './chat-bubble.html',
})
export class ChatBubble {
  message = input.required<string>();
  timeStamp = input<string>('');
  senderName = input<string>('');
  // 'sent' places bubble on the right; 'received' places it on the left 
  type = input<'sent' | 'received'>('sent');


}
