import * as Ably from 'ably';

const ABLY_API_KEY = import.meta.env.VITE_ABLY_API_KEY;

// Use persistent playerId from localStorage for clientId to ensure Ably session persistence
const getClientId = () => {
    let id = localStorage.getItem('myPlayerId');
    if (!id) {
        id = 'anonymous-' + Math.random().toString(36).substring(2, 9);
    }
    return id;
};

export const ably = new Ably.Realtime({
  key: ABLY_API_KEY,
  clientId: getClientId(),
});

export const gameChannel = ably.channels.get('con-thuyen-chung');
