import React from 'react';
import { PinnedPluginListProvider, SchemaComponentOptions } from '@nocobase/client';
import { RoleSwitcher } from './components/RoleSwitcher';

export const RoleSwitcherProvider = (props) => {
  return (
    <PinnedPluginListProvider
      items={{
        roleSwitcher: {
          order: 250,
          component: 'RoleSwitcher',
          pin: true,
          snippet: '*',
        },
      }}
    >
      <SchemaComponentOptions
        components={{
          RoleSwitcher,
        }}
      >
        {props.children}
      </SchemaComponentOptions>
    </PinnedPluginListProvider>
  );
};
