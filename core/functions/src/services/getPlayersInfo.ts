import { firestore } from 'firebase-admin';
import { PlayerInfo } from '../models/Player';

export const getPlayersInfo = async (db: firestore.Firestore) => {
  const players: PlayerInfo[] = [];
  const collection = await db.collection('players').get();

  collection.forEach(doc => {
    players.push(doc.data() as PlayerInfo);
  });

  return players;
};
