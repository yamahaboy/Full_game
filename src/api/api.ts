const BASE_URL = 'https://java-tcp-game-production.up.railway.app';

export const createGame = async () => {
    const res = await fetch(`${BASE_URL}/create`, { method: 'POST' });
    return (await res.text()).split(',');
};

export const joinGame = async () => {
    const res = await fetch(`${BASE_URL}/join`, { method: 'POST' });
    return (await res.text()).split(',');
};

export const getNext = async (sessionId: string, playerId: string) => {
    const res = await fetch(`${BASE_URL}/next?sessionId=${sessionId}&playerId=${playerId}`);
    return await res.text();
};

export const sendAnswer = async (sessionId: string, playerId: string, answer: string) => {
    await fetch(`${BASE_URL}/answer?sessionId=${sessionId}&playerId=${playerId}`, {
        method: 'POST',
        body: answer,
    });
};
