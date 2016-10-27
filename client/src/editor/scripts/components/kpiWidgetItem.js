import React from 'react';
import { Link } from 'react-router';
import {
  getCreateDashboardWidgetDataUrl,
  getEditDashboardWidgetDataUrl,
  getEditDashboardWidgetDescriptionsUrl
} from './../utils/urlHelpers';


const Preview = () => {
  return (
    <div>Preview</div>
  )
};

const KpiWidgetItem = props => {

  let {
    className
  } = props;

  // todo - urls ? wtf will they be ?

  return (
    <article className={className}>
      <h1>Key Performance Indicators</h1>
    </article>
  )
};

export default KpiWidgetItem;
