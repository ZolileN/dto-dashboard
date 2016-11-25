import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

const context = require.context('./../stories', true, /\.js$/);


import './../src/editor/styles/main';

import IconLoader from './../src/_shared/scripts/components/iconLoader';

const StorybookDecorator = (story) => (
  <div style={{height:'100vh',width:'600px',display:'table',margin:'0 auto'}}>
    <IconLoader />
    <div style={{display:'table-cell',verticalAlign:'middle'}}>
      {story()}
    </div>
  </div>
);

addDecorator(StorybookDecorator);
addDecorator(withKnobs);


function loadStories() {
  context.keys().forEach(context)
}

configure(loadStories, module);
