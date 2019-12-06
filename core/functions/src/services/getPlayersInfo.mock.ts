import { PlayerInfo } from "../models/Player";

export const getPlayersInfo = async () => {
  return new Promise<PlayerInfo[]>(resolve =>
    setTimeout(() => {
      resolve(players);
    }, 3000)
  );
};

const players: PlayerInfo[] = [
  {
    id: '314807',
    full_name: 'Oussama Zaki',
    github: 'https://github.com/OussaZaki',
    tags: ['C++', 'Typescript'],
    domain: 'PX',
    team: 'Merchant Shipping'
  }
];
