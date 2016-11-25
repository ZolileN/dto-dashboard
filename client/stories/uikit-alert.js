import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';

import UikitAlert from './../src/_shared/scripts/components/uikit-components/alert';


storiesOf('Uikit Alert 1', module)
  .add('with type success', () => (
    <UikitAlert type="success" text={text('text', 'Bacon ipsum lorem')} />
  ))
  .add('with type error', () => (
    <UikitAlert type="error" text={text('text', 'Bacon ipsum lorem')} />
  ));
