import React, { useMemo } from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useAPIClient, useCurrentRoles, useCurrentRoleMode } from '@nocobase/client';
import _ from 'lodash';
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

export const RoleSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const api = useAPIClient();

  const roles = _.cloneDeep(useCurrentRoles());
  const roleMode = useCurrentRoleMode();

  if (roleMode === 'allow-use-union') {
    roles.unshift({
      name: '__union__',
      title: t('Full permissions', { ns: 'acl' }),
    });
  }

  const currentRole = roles.find((r) => r.name === api.auth.role) ?? roles[0];

  const items = useMemo(() => {
    const menus = [];

    for (const role of roles) {
      if (role.name === '__union__') {
        menus.push({
          key: '__divider__',
          type: 'divider',
        });
      }

      menus.push({
        key: role.name,
        label: role.title,
      });
    }

    return menus;
  }, [roles]);

  // 没有切换意义
  if (roles.length <= 1 || roleMode === 'only-use-union') {
    return null;
  }

  return (
    <Dropdown
      trigger={['click']}
      menu={{
        selectedKeys: [currentRole.name],
        items,
        onClick: async ({ key }) => {
          if (key === '__divider__') {
            return;
          }

          api.auth.setRole(key as string);
          await api.resource('users').setDefaultRole({
            values: {
              roleName: key,
            },
          });
          location.reload();
          window.location.reload();
        },
      }}
    >
      <Button type="text" className={roleButtonClassName}>
        {currentRole.title}
        <DownOutlined style={{ marginLeft: 3 }} />
      </Button>
    </Dropdown>
  );
};
