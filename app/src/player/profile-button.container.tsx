import React, { useState, useContext } from 'react';
import { Icon } from 'antd';

import { Player, PlayerProfile } from './player.model';
import { ProfileForm } from './profile-form.component';
import { postPlayer } from './post-player.service';
import { AppContext } from '../App';

export type Props = {
  player: Player;
};

export const Profile: React.FC<Props> = ({ player }) => {
  const { dispatch } = useContext(AppContext);
  const [profileState, setProfileState] = useState({
    visible: false,
    confirmLoading: false,
    player
  });

  const showModal = () => {
    setProfileState({
      ...profileState,
      visible: true
    });
  };

  // TODO: catch errors and handle properly.
  const handleOk = async (player: PlayerProfile) => {
    setProfileState({
      ...profileState,
      confirmLoading: true
    });

    await postPlayer(player);

    setProfileState({
      visible: false,
      confirmLoading: false,
      player: { ...player, ...profileState.player }
    });
    dispatch();
  };

  const handleCancel = () => {
    setProfileState({
      ...profileState,
      visible: false
    });
  };

  return (
    <div>
      <Icon
        type="edit"
        style={{ fontSize: 18 }}
        onClick={showModal}
        theme="twoTone"
        twoToneColor="#09d3ac"
      />
      <ProfileForm
        player={profileState.player}
        visible={profileState.visible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        confirmLoading={profileState.confirmLoading}
      />
    </div>
  );
};
