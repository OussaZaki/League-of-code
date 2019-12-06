import React, { useState, useEffect } from 'react';
import { Spin, Icon, Alert } from 'antd';

import { RankTable } from './rank-table.component';
import { capitalize } from '../helpers/capitalize';
import { getLeaderboard } from './get-leaderboard.service';
import { Player } from '../player/player.model';

type Division = 'master' | 'diamond' | 'gold' | 'silver';
type League = Record<Division, Player[]>;
const antIcon = (
  <Icon type="loading" style={{ fontSize: 32, color: '#09d3ac' }} spin />
);

const _mapLeague = (league: League) =>
  Object.entries(league).map(([division, rankTable]) => (
    <div key={division}>
      <h3 className="division-title">{capitalize(division)}</h3>
      {rankTable.length ? (
        <RankTable dataSource={rankTable} />
      ) : (
        <p className="division-message">No participant in this division yet.</p>
      )}
    </div>
  ));

type Props = {
  edits: number;
};

export const LeaguesProvider: React.FC<Props> = ({ edits }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [league, setLeague] = useState<League>({
    master: [],
    diamond: [],
    gold: [],
    silver: []
  });

  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      !didCancel && setLoading(true);
      try {
        const league = await getLeaderboard();
        !didCancel && setLeague(league);
      } catch (error) {
        setError(error);
      } finally {
        !didCancel && setLoading(false);
      }
    }
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [edits]);

  return (
    <div className="leagues">
      {error && (
        <Alert
          message="Error fetching leaderboard."
          description="Ranking service might be down, please check the official leaderboard."
          type="error"
          className="error"
        />
      )}
      {loading ? (
        <Spin className="loader" indicator={antIcon} />
      ) : (
        _mapLeague(league)
      )}
    </div>
  );
};
