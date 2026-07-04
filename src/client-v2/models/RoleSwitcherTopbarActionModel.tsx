import React from 'react';
import { TopbarActionModel } from '@nocobase/client-v2';
import { RoleSwitcherButton } from '../components/RoleSwitcherButton';

interface UserRole {
  name: string;
  title?: string;
}

export default class RoleSwitcherTopbarActionModel extends TopbarActionModel {
  sort = 20;

  actionId = 'role-switcher';

  testId = 'role-switcher';

  get options() {
    const roles: UserRole[] = Array.isArray(this.context.user?.roles) ? [...this.context.user.roles] : [];

    const roleMode = this.context.acl?.data?.roleMode;

    if (roleMode === 'allow-use-union') {
      roles.unshift({
        name: '__union__',
        title: this.context.t('Full permissions', {
          ns: '@nocobase/plugin-acl',
        }),
      });
    }

    return roles.map((role) => ({
      key: role.name,
      label: this.context.t(role.title) || this.context.t(role.name),
    }));
  }

  get currentRole() {
    return this.context.api.auth.role;
  }

  get currentRoleLabel() {
    return this.options.find((item) => item.key === this.currentRole)?.label ?? this.currentRole;
  }

  get visible() {
    return this.options.length > 1 && this.context.acl?.data?.roleMode !== 'only-use-union';
  }

  async switchRole(roleName: string) {
    if (roleName === this.currentRole) {
      return;
    }

    this.context.api.auth.setRole(roleName);

    await this.context.api.resource('users').setDefaultRole({
      values: {
        roleName,
      },
    });

    window.location.reload();
  }

  render() {
    return <RoleSwitcherButton model={this} />;
  }
}
