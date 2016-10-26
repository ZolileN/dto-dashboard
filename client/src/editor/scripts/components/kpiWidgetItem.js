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

  let dateHash = '16-10'; // todo

  // todo - urls ? wtf will they be ?

  return (
    <section>
      <h1>Key Performance Indicators</h1>
    </section>
  )
};

export default KpiWidgetItem;
