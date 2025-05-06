import { useState, useEffect } from 'react';
import { getNext, sendAnswer } from '../api/api';

export const useGameSession = (sessionId: string, playerId: string) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        let interval: number;
        if (sessionId && playerId) {
            interval = window.setInterval(async () => {
                const msg = await getNext(sessionId, playerId);
                if (msg.trim()) {
                    setMessages((prev) => [...prev, msg]);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [sessionId, playerId]);

    const send = async (answer: string) => {
        setWaiting(true);
        await sendAnswer(sessionId, playerId, answer);
        setWaiting(false);
    };

    return { messages, send, waiting };
};
