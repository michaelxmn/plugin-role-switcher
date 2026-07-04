import { Plugin } from '@nocobase/client-v2';

export class SwitchRolesClientV2 extends Plugin {
  async load() {
    console.log('loading switch roles');
    this.flowEngine.registerModelLoaders({
      SwitchRolesActionModel: {
        extends: 'TopbarActionModel',
        loader: () => import('./models/./RoleSwitcherTopbarActionModel'),
      },
    });
  }
}

export default SwitchRolesClientV2;
