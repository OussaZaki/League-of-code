import React from 'react';
import { Table, Tag } from 'antd';
import { Profile } from '../player/profile-button.container';
import { Player } from '../player/player.model';

export type TableProps = {
  dataSource: any;
};

const columns = [
  {
    title: '#',
    key: 'index',
    render: (_text: any, _record: Player, index: number) => index + 1
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: Player) =>
      record.github ? <a href={record.github}>{text}</a> : text
  },
  {
    title: 'Team',
    render: (_text: string, record: Player) => {
      if (!record || !record.team) {
        return;
      }

      return `${record.domain ? record.domain + '/' : ''}` + record.team;
    }
  },
  {
    title: 'Stars',
    dataIndex: 'stars',
    key: 'stars'
  },
  {
    title: 'Score',
    dataIndex: 'local_score',
    key: 'local_score'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags &&
          tags.map(tag => {
            return (
              <Tag color={'#17120f'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
      </span>
    )
  },
  {
    title: '',
    render: (_text: string, record: any) => <Profile player={record}></Profile>
  }
];

export const RankTable: React.FC<TableProps> = ({ dataSource }) => (
  <Table size={"small"} columns={columns} dataSource={dataSource} pagination={false} />
);
