export type Days =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24';

export type Stars = '1' | '2';

export type AdventOfCodePlayer = {
  stars: number;
  completion_day_level: {
    [P in Days]?: {
      [T in Stars]?: {
        get_star_ts: string | 0;
      };
    };
  };
  global_score: number;
  name: string | null;
  id: string;
  local_score: number;
  last_star_ts: string | 0;
};

export type PlayerInfo = {
  id: string;
  tags?: string[];
  full_name?: string;
  github?: string;
  domain?: string;
  team?: string;
};

export type Player = AdventOfCodePlayer & PlayerInfo;
