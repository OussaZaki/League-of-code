import { PlayerInfo } from '../models/Player';
import { firestore } from 'firebase-admin';

export const postPlayer = async (
  db: firestore.Firestore,
  player: PlayerInfo
) => {
  await db.collection('players')
    .doc(player.id)
    .set(player);
};
