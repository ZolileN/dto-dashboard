import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';

import UikitAlert from './../src/_shared/scripts/components/uikit-components/alert';


storiesOf('Uikit Alert 2' , module)
  .add('with type warning', () => (
    <UikitAlert type="warning" text={text('text', 'Bacon ipsum lorem')} />
  ))
  .add('with type info', () => (
    <UikitAlert type="info" text={text('text', 'Bacon ipsum lorem')} />
  ));
