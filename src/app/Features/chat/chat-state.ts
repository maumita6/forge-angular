import { Service, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversation, ChatMessage } from './model/chat.model';


@Service()
export class ChatStateService {

    private http = inject(HttpClient);

    currentPrompt = signal<string>('');

    conversations = signal<Conversation[]>([]);

    activeConversationId = signal<string | null>(null);


    // compute signal to filter and get the selected chat 
    activeConversation = computed(() => {
        const id = this.activeConversationId();
        return this.conversations().find(item => item.id === id) || null;
    })

    // create in conversation and add in left panel, this is triggered when we click send button
    createNewConversation(initialPrompt: string): string {
        const newID = `conv-${Date.now()}`;

        const newConv: Conversation = {

            id: newID,
            title: initialPrompt,
            messages: [
                {
                    title: initialPrompt.length > 25 ? initialPrompt.substring(0, 25) + '...' : initialPrompt,
                    type: 'sent',
                    timestamp: new Date()
                }
            ]
        }

        this.conversations.update(list => [newConv, ...list]);
        this.currentPrompt.set('');

        this.generateAIResponse(newID, initialPrompt);

        return newID;
    }

    sendMessageToActive(text: string): void {
        const activeID = this.activeConversationId();
        if (!activeID) {
            return;
        }
        this.addMessageToConversation(activeID,
            {
                title: text,
                type: 'sent',
                timestamp: new Date()
            }
        )
        this.currentPrompt.set('');
        this.generateAIResponse(activeID, text);

    }


    private addMessageToConversation(id: string, msg: ChatMessage): void {
        this.conversations.update(list =>
            list.map(item => item.id === id ? { ...item, messages: [...item.messages, msg] } : item)
        );
    }

    private generateAIResponse(id: string, promptText: string): void {
        setTimeout(() => {
            this.addMessageToConversation(id, {
                title: `Response generated based on your prompt: "${promptText}". How else can I assist you with this?`,
                type: 'received',
                timestamp: new Date()
            });
        }, 1500); // response latency simulation
    }


    setprompt(text: string): void {
        this.currentPrompt.set(text);
    }



}
