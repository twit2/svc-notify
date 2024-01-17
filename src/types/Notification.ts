enum NotificationType {
    PostMention = 10,
    PostLike = 11,
    UserFollow = 30
}

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    hints: {
        targetUser?: string;
    }
}