import React from 'react';
import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { observer } from '@nocobase/flow-engine';
import RoleSwitcherTopbarActionModel from '../models/RoleSwitcherTopbarActionModel';
import { css } from '@emotion/css';

const roleButtonClassName = css`
  min-width: 100px;
  padding-inline: 12px;
  justify-content: space-between;
  border-radius: 6px;

  color: var(--nb-topbar-action-color);

  &:hover,
  &:focus,
  &:active {
    background: var(--nb-topbar-action-hover-bg) !important;
    color: var(--nb-topbar-action-color) !important;
  }
`;

export const RoleSwitcherButton = observer(({ model }: { model: RoleSwitcherTopbarActionModel }) => {
  if (!model.visible) {
    return null;
  }

  return (
    <div
      style={{
        paddingInline: 12,
      }}
    >
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        menu={{
          selectable: true,
          selectedKeys: [model.currentRole],
          items: model.options,
          onClick: async ({ key }) => {
            await model.switchRole(String(key));
          },
        }}
      >
        <Button type="text" className={roleButtonClassName}>
          {model.currentRoleLabel}
          <DownOutlined style={{ marginLeft: 3 }} />
        </Button>
      </Dropdown>
    </div>
  );
});
