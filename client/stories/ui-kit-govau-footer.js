import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';


import GovauFooter from './../src/_shared/scripts/components/uikit-components/govauFooter';


storiesOf('Ui-kit GOV.AU Footer', module)
  .add('Default', () => <GovauFooter />)
;
