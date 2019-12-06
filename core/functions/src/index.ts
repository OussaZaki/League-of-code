import * as functions from 'firebase-functions';
import * as cors from 'cors';
import { Request, Response } from 'express';
import { firestore, initializeApp, credential } from 'firebase-admin';

import { postPlayer } from './services/postPlayer';
import { getLeague } from './services/getLeague';

let db: firestore.Firestore;
const bootstrap = () => {
  if (!db) {
    initializeApp({
      credential: credential.applicationDefault(),
      databaseURL: 'https://oussa-io.firebaseio.com'
    });

    db = firestore();
  }

  return {
    db
  };
};

const corsHandler = cors({ origin: true });

export const player = functions.https.onRequest(
  async (request: Request, response: Response) =>
    corsHandler(request, response, async () => {
      const { db: database } = bootstrap();

      try {
        await postPlayer(database, request.body);

        response.status(200);
        response.send('Player upadted successfullu!');
      } catch (error) {
        response.status(500);
        console.error(error);
        response.send(error);
      }
    })
);

export const league = functions.https.onRequest(
  async (_request: Request, response: Response) => {
    const { db: database } = bootstrap();
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    try {
      const leagueData = await getLeague(database);

      response.status(200);
      response.json(leagueData);
    } catch (error) {
      response.status(500);
      console.error(error);
      response.send(error);
    }
  }
);
