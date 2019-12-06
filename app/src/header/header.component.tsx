import React from 'react';
import logo from '../assets/aofxKlarna.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="AdventOfCode x Klarna logo" />
      <p className="title">
        Klarna's internal <strong>Advent Of Code</strong> leaderboard.
      </p>
      <p className="subtitle">y.2019 | Dec 1st - Dec 25th</p>
      <p className="content">
        <a
          className="link"
          href="https://adventofcode.com/2019/leaderboard/private"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the leaderboard
        </a>
        <br />
        using the code 12900-d95e2214
      </p>
    </header>
  );
};
