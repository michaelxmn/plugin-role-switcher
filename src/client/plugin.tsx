import { Plugin } from '@nocobase/client';
import models from './models';
import { RoleSwitcherProvider } from './RoleSwitcherProvider';

export class SwitchRolesClient extends Plugin {
  async load() {
    this.flowEngine.registerModels(models);
    this.app.use(RoleSwitcherProvider);
  }
}

export default SwitchRolesClient;
