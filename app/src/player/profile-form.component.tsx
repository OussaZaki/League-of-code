import React from 'react';
import { Modal, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import { Player, PlayerProfile } from './player.model';
import { EditableTags } from './editable-tag-group.component';

type Props = {
  player: Player;
  visible: boolean;
  handleCancel: () => void;
  handleOk: (player: PlayerProfile) => void;
  confirmLoading: boolean;
} & FormComponentProps;

export const ProfileFormBase: React.FC<Props> = ({
  player,
  visible,
  handleCancel,
  handleOk,
  confirmLoading,
  form
}) => {
  const { getFieldDecorator } = form;
  const onOk = () => {
    form.validateFields((err, values: PlayerProfile) => {
      if (err) {
        return;
      }

      handleOk({ id: player.id, ...values });
    });
  };
  return (
    <Modal
      visible={visible}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <h1 className={'form-title'}>
        <strong>{player.name}</strong>'s Profile.
      </h1>
      <h3 className={'form-subtitle'}>{'Please only edit your profile'}</h3>
      <Form layout="vertical">
        <Form.Item label="Full name">
          {getFieldDecorator('full_name', {
            initialValue: player.full_name
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Github Profile">
          {getFieldDecorator('github', {
            initialValue: player.github
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Klarna's Domain">
          {getFieldDecorator('domain', {
            initialValue: player.domain
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Klarna's Team">
          {getFieldDecorator('team', {
            initialValue: player.team
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Programming languages">
          {getFieldDecorator('tags', {
            initialValue: player.tags
          })(<EditableTags />)}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const ProfileForm = Form.create<Props>({ name: 'profile-form' })(
  ProfileFormBase
);
