import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, boolean, number } from '@kadira/storybook-addon-knobs';


import GovauHeader from './../src/_shared/scripts/components/uikit-components/govauHeader';


storiesOf('Ui-kit GOV.AU Header', module)
  .add('Default', () => <GovauHeader />)
  .add('Sign in', () => <GovauHeader isLoggedIn={false} />)
  .add('Sign out', () => <GovauHeader isLoggedIn={true} userEmail="hannah.ho@dto.gov.au" />)
;
