export interface ChatMessage {
    title: string;
    type: 'sent' | 'received';
    timestamp: Date
}

export interface Conversation {
    id: string;
    title: string;
    messages: ChatMessage[]
}