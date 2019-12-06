export type Player = {
  id: string;
  local_score: string;
  stars: string;
  tags: string[];
  full_name?: string;
  name?: string;
  github?: string;
  domain?: string;
  team?: string;
};

export type PlayerProfile = {
  id: string;
  tags: string[];
  full_name?: string;
  github?: string;
  domain?: string;
  team?: string;
};
